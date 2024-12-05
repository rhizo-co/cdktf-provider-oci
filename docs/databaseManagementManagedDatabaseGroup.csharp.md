# `databaseManagementManagedDatabaseGroup` Submodule <a name="`databaseManagementManagedDatabaseGroup` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabaseGroup <a name="DatabaseManagementManagedDatabaseGroup" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group oci_database_management_managed_database_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroup(Construct Scope, string Id, DatabaseManagementManagedDatabaseGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig">DatabaseManagementManagedDatabaseGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig">DatabaseManagementManagedDatabaseGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases">PutManagedDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetManagedDatabases">ResetManagedDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedDatabases` <a name="PutManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases"></a>

```csharp
private void PutManagedDatabases(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putManagedDatabases.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementManagedDatabaseGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedDatabases` <a name="ResetManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetManagedDatabases"></a>

```csharp
private void ResetManagedDatabases()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabaseGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabaseGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabaseGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabaseGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabaseGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabaseGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementManagedDatabaseGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementManagedDatabaseGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabaseGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabases">ManagedDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList">DatabaseManagementManagedDatabaseGroupManagedDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference">DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabasesInput">ManagedDatabasesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManagedDatabases`<sup>Required</sup> <a name="ManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabases"></a>

```csharp
public DatabaseManagementManagedDatabaseGroupManagedDatabasesList ManagedDatabases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList">DatabaseManagementManagedDatabaseGroupManagedDatabasesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference">DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabasesInput`<sup>Optional</sup> <a name="ManagedDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.managedDatabasesInput"></a>

```csharp
public object ManagedDatabasesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabaseGroupConfig <a name="DatabaseManagementManagedDatabaseGroupConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object ManagedDatabases = null,
    DatabaseManagementManagedDatabaseGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.managedDatabases">ManagedDatabases</a></code> | <code>object</code> | managed_databases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#name DatabaseManagementManagedDatabaseGroup#name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#defined_tags DatabaseManagementManagedDatabaseGroup#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#description DatabaseManagementManagedDatabaseGroup#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#freeform_tags DatabaseManagementManagedDatabaseGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDatabases`<sup>Optional</sup> <a name="ManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.managedDatabases"></a>

```csharp
public object ManagedDatabases { get; set; }
```

- *Type:* object

managed_databases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#managed_databases DatabaseManagementManagedDatabaseGroup#managed_databases}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupConfig.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabaseGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts">DatabaseManagementManagedDatabaseGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#timeouts DatabaseManagementManagedDatabaseGroup#timeouts}

---

### DatabaseManagementManagedDatabaseGroupManagedDatabases <a name="DatabaseManagementManagedDatabaseGroupManagedDatabases" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupManagedDatabases {
    string CompartmentId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#compartment_id DatabaseManagementManagedDatabaseGroup#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabases.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#id DatabaseManagementManagedDatabaseGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatabaseManagementManagedDatabaseGroupTimeouts <a name="DatabaseManagementManagedDatabaseGroupTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#create DatabaseManagementManagedDatabaseGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#delete DatabaseManagementManagedDatabaseGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#update DatabaseManagementManagedDatabaseGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#create DatabaseManagementManagedDatabaseGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#delete DatabaseManagementManagedDatabaseGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database_group#update DatabaseManagementManagedDatabaseGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabaseGroupManagedDatabasesList <a name="DatabaseManagementManagedDatabaseGroupManagedDatabasesList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupManagedDatabasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference <a name="DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseSubType">DatabaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.timeAdded">TimeAdded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseSubType"></a>

```csharp
public string DatabaseSubType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeAdded`<sup>Required</sup> <a name="TimeAdded" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.timeAdded"></a>

```csharp
public string TimeAdded { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupManagedDatabasesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference <a name="DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabaseGroup.DatabaseManagementManagedDatabaseGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



