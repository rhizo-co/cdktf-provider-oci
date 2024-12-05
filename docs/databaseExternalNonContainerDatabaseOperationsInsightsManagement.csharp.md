# `databaseExternalNonContainerDatabaseOperationsInsightsManagement` Submodule <a name="`databaseExternalNonContainerDatabaseOperationsInsightsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagement <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management oci_database_external_non_container_database_operations_insights_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseOperationsInsightsManagement(Construct Scope, string Id, DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalNonContainerDatabaseOperationsInsightsManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalNonContainerDatabaseOperationsInsightsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalNonContainerDatabaseOperationsInsightsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput">EnableOperationsInsightsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsights">EnableOperationsInsights</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeouts"></a>

```csharp
public DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference</a>

---

##### `EnableOperationsInsightsInput`<sup>Optional</sup> <a name="EnableOperationsInsightsInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput"></a>

```csharp
public object EnableOperationsInsightsInput { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput"></a>

```csharp
public string ExternalDatabaseConnectorIdInput { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseIdInput"></a>

```csharp
public string ExternalNonContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableOperationsInsights`<sup>Required</sup> <a name="EnableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsights"></a>

```csharp
public object EnableOperationsInsights { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableOperationsInsights,
    string ExternalDatabaseConnectorId,
    string ExternalNonContainerDatabaseId,
    string Id = null,
    DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights">EnableOperationsInsights</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#enable_operations_insights DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_database_connector_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableOperationsInsights`<sup>Required</sup> <a name="EnableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights"></a>

```csharp
public object EnableOperationsInsights { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#enable_operations_insights DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_database_connector_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_non_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.timeouts"></a>

```csharp
public DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#timeouts DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#timeouts}

---

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#create DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#delete DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#update DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#create DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#delete DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#update DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



