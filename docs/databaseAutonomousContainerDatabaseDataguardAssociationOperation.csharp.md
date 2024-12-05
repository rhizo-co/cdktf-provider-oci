# `databaseAutonomousContainerDatabaseDataguardAssociationOperation` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardAssociationOperation` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperation <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation oci_database_autonomous_container_database_dataguard_association_operation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationOperation(Construct Scope, string Id, DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociationOperation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociationOperation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociationOperation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociationOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociationOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationIdInput">AutonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operation">Operation</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeouts"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference</a>

---

##### `AutonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationIdInput { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseIdInput"></a>

```csharp
public string AutonomousContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationId { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousContainerDatabaseDataguardAssociationId,
    string AutonomousContainerDatabaseId,
    string Operation,
    string Id = null,
    DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}.

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}.

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#create DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#delete DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#create DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#delete DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



