# `databaseManagementExternalDbSystemDatabaseManagementsManagement` Submodule <a name="`databaseManagementExternalDbSystemDatabaseManagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagement <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management oci_database_management_external_db_system_database_managements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemDatabaseManagementsManagement(Construct Scope, string Id, DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig">DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig">DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemDatabaseManagementsManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemDatabaseManagementsManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemDatabaseManagementsManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemDatabaseManagementsManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalDbSystemDatabaseManagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagementInput">EnableDatabaseManagementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagement">EnableDatabaseManagement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference</a>

---

##### `EnableDatabaseManagementInput`<sup>Optional</sup> <a name="EnableDatabaseManagementInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagementInput"></a>

```csharp
public object EnableDatabaseManagementInput { get; }
```

- *Type:* object

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemIdInput"></a>

```csharp
public string ExternalDbSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableDatabaseManagement`<sup>Required</sup> <a name="EnableDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagement"></a>

```csharp
public object EnableDatabaseManagement { get; }
```

- *Type:* object

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableDatabaseManagement,
    string ExternalDbSystemId,
    string Id = null,
    string LicenseModel = null,
    DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.enableDatabaseManagement">EnableDatabaseManagement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#enable_database_management DatabaseManagementExternalDbSystemDatabaseManagementsManagement#enable_database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#external_db_system_id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#license_model DatabaseManagementExternalDbSystemDatabaseManagementsManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableDatabaseManagement`<sup>Required</sup> <a name="EnableDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.enableDatabaseManagement"></a>

```csharp
public object EnableDatabaseManagement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#enable_database_management DatabaseManagementExternalDbSystemDatabaseManagementsManagement#enable_database_management}.

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#external_db_system_id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#external_db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#license_model DatabaseManagementExternalDbSystemDatabaseManagementsManagement#license_model}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#timeouts DatabaseManagementExternalDbSystemDatabaseManagementsManagement#timeouts}

---

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#create DatabaseManagementExternalDbSystemDatabaseManagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#delete DatabaseManagementExternalDbSystemDatabaseManagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#update DatabaseManagementExternalDbSystemDatabaseManagementsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#create DatabaseManagementExternalDbSystemDatabaseManagementsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#delete DatabaseManagementExternalDbSystemDatabaseManagementsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#update DatabaseManagementExternalDbSystemDatabaseManagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



