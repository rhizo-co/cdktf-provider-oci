# `databaseMaintenanceRun` Submodule <a name="`databaseMaintenanceRun` Submodule" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMaintenanceRun <a name="DatabaseMaintenanceRun" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run oci_database_maintenance_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRun(Construct Scope, string Id, DatabaseMaintenanceRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled">ResetIsDstFileUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseMaintenanceRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDstFileUpdateEnabled` <a name="ResetIsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled"></a>

```csharp
private void ResetIsDstFileUpdateEnabled()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMaintenanceRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMaintenanceRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMaintenanceRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMaintenanceRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMaintenanceRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMaintenanceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMaintenanceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins">CurrentCustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent">CurrentPatchingComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime">EstimatedComponentPatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime">EstimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount">PatchFailureCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId">PatchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime">PatchingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime">PatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus">PatchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId">PeerMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion">TargetDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion">TargetStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput">IsDstFileUpdateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput">PatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput">TimeScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled">TimeScheduled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CurrentCustomActionTimeoutInMins`<sup>Required</sup> <a name="CurrentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins"></a>

```csharp
public double CurrentCustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `CurrentPatchingComponent`<sup>Required</sup> <a name="CurrentPatchingComponent" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent"></a>

```csharp
public string CurrentPatchingComponent { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EstimatedComponentPatchingStartTime`<sup>Required</sup> <a name="EstimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime"></a>

```csharp
public string EstimatedComponentPatchingStartTime { get; }
```

- *Type:* string

---

##### `EstimatedPatchingTime`<sup>Required</sup> <a name="EstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime"></a>

```csharp
public DatabaseMaintenanceRunEstimatedPatchingTimeList EstimatedPatchingTime { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a>

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceSubtype`<sup>Required</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype"></a>

```csharp
public string MaintenanceSubtype { get; }
```

- *Type:* string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; }
```

- *Type:* string

---

##### `PatchFailureCount`<sup>Required</sup> <a name="PatchFailureCount" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount"></a>

```csharp
public double PatchFailureCount { get; }
```

- *Type:* double

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId"></a>

```csharp
public string PatchId { get; }
```

- *Type:* string

---

##### `PatchingEndTime`<sup>Required</sup> <a name="PatchingEndTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime"></a>

```csharp
public string PatchingEndTime { get; }
```

- *Type:* string

---

##### `PatchingStartTime`<sup>Required</sup> <a name="PatchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime"></a>

```csharp
public string PatchingStartTime { get; }
```

- *Type:* string

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus"></a>

```csharp
public string PatchingStatus { get; }
```

- *Type:* string

---

##### `PeerMaintenanceRunId`<sup>Required</sup> <a name="PeerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId"></a>

```csharp
public string PeerMaintenanceRunId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetDbServerVersion`<sup>Required</sup> <a name="TargetDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion"></a>

```csharp
public string TargetDbServerVersion { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `TargetStorageServerVersion`<sup>Required</sup> <a name="TargetStorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion"></a>

```csharp
public string TargetStorageServerVersion { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts"></a>

```csharp
public DatabaseMaintenanceRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDstFileUpdateEnabledInput`<sup>Optional</sup> <a name="IsDstFileUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput"></a>

```csharp
public object IsDstFileUpdateEnabledInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PatchTypeInput`<sup>Optional</sup> <a name="PatchTypeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput"></a>

```csharp
public string PatchTypeInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeScheduledInput`<sup>Optional</sup> <a name="TimeScheduledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput"></a>

```csharp
public string TimeScheduledInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDstFileUpdateEnabled`<sup>Required</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled"></a>

```csharp
public object IsDstFileUpdateEnabled { get; }
```

- *Type:* object

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled"></a>

```csharp
public string TimeScheduled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMaintenanceRunConfig <a name="DatabaseMaintenanceRunConfig" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PatchType,
    string TargetResourceId,
    string TimeScheduled,
    string CompartmentId = null,
    string DatabaseSoftwareImageId = null,
    string Id = null,
    object IsDstFileUpdateEnabled = null,
    string PatchingMode = null,
    DatabaseMaintenanceRunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType">PatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled">TimeScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType"></a>

```csharp
public string PatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}.

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled"></a>

```csharp
public string TimeScheduled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDstFileUpdateEnabled`<sup>Optional</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled"></a>

```csharp
public object IsDstFileUpdateEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}.

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts"></a>

```csharp
public DatabaseMaintenanceRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#timeouts DatabaseMaintenanceRun#timeouts}

---

### DatabaseMaintenanceRunEstimatedPatchingTime <a name="DatabaseMaintenanceRunEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunEstimatedPatchingTime {

};
```


### DatabaseMaintenanceRunTimeouts <a name="DatabaseMaintenanceRunTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMaintenanceRunEstimatedPatchingTimeList <a name="DatabaseMaintenanceRunEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunEstimatedPatchingTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get"></a>

```csharp
private DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference <a name="DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">EstimatedDbServerPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">EstimatedNetworkSwitchesPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">EstimatedStorageServerPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">TotalEstimatedPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedDbServerPatchingTime`<sup>Required</sup> <a name="EstimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```csharp
public double EstimatedDbServerPatchingTime { get; }
```

- *Type:* double

---

##### `EstimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="EstimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```csharp
public double EstimatedNetworkSwitchesPatchingTime { get; }
```

- *Type:* double

---

##### `EstimatedStorageServerPatchingTime`<sup>Required</sup> <a name="EstimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```csharp
public double EstimatedStorageServerPatchingTime { get; }
```

- *Type:* double

---

##### `TotalEstimatedPatchingTime`<sup>Required</sup> <a name="TotalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```csharp
public double TotalEstimatedPatchingTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```csharp
public DatabaseMaintenanceRunEstimatedPatchingTime InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a>

---


### DatabaseMaintenanceRunTimeoutsOutputReference <a name="DatabaseMaintenanceRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMaintenanceRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



