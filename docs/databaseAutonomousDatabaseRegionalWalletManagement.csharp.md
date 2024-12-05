# `databaseAutonomousDatabaseRegionalWalletManagement` Submodule <a name="`databaseAutonomousDatabaseRegionalWalletManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseRegionalWalletManagement <a name="DatabaseAutonomousDatabaseRegionalWalletManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management oci_database_autonomous_database_regional_wallet_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseRegionalWalletManagement(Construct Scope, string Id, DatabaseAutonomousDatabaseRegionalWalletManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig">DatabaseAutonomousDatabaseRegionalWalletManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig">DatabaseAutonomousDatabaseRegionalWalletManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetShouldRotate">ResetShouldRotate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts">DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts</a>

---

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShouldRotate` <a name="ResetShouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetShouldRotate"></a>

```csharp
private void ResetShouldRotate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseRegionalWalletManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseRegionalWalletManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseRegionalWalletManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseRegionalWalletManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseRegionalWalletManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseRegionalWalletManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabaseRegionalWalletManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabaseRegionalWalletManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseRegionalWalletManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference">DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeRotated">TimeRotated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotateInput">ShouldRotateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotate">ShouldRotate</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeouts"></a>

```csharp
public DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference">DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference</a>

---

##### `TimeRotated`<sup>Required</sup> <a name="TimeRotated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeRotated"></a>

```csharp
public string TimeRotated { get; }
```

- *Type:* string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShouldRotateInput`<sup>Optional</sup> <a name="ShouldRotateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotateInput"></a>

```csharp
public object ShouldRotateInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShouldRotate`<sup>Required</sup> <a name="ShouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotate"></a>

```csharp
public object ShouldRotate { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseRegionalWalletManagementConfig <a name="DatabaseAutonomousDatabaseRegionalWalletManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseRegionalWalletManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double GracePeriod = null,
    string Id = null,
    object ShouldRotate = null,
    DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#grace_period DatabaseAutonomousDatabaseRegionalWalletManagement#grace_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#id DatabaseAutonomousDatabaseRegionalWalletManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.shouldRotate">ShouldRotate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#should_rotate DatabaseAutonomousDatabaseRegionalWalletManagement#should_rotate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts">DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#grace_period DatabaseAutonomousDatabaseRegionalWalletManagement#grace_period}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#id DatabaseAutonomousDatabaseRegionalWalletManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShouldRotate`<sup>Optional</sup> <a name="ShouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.shouldRotate"></a>

```csharp
public object ShouldRotate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#should_rotate DatabaseAutonomousDatabaseRegionalWalletManagement#should_rotate}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts">DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#timeouts DatabaseAutonomousDatabaseRegionalWalletManagement#timeouts}

---

### DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts <a name="DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#create DatabaseAutonomousDatabaseRegionalWalletManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#delete DatabaseAutonomousDatabaseRegionalWalletManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#update DatabaseAutonomousDatabaseRegionalWalletManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#create DatabaseAutonomousDatabaseRegionalWalletManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#delete DatabaseAutonomousDatabaseRegionalWalletManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_regional_wallet_management#update DatabaseAutonomousDatabaseRegionalWalletManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseRegionalWalletManagement.DatabaseAutonomousDatabaseRegionalWalletManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



