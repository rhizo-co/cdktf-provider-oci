# `databaseManagementManagedDatabase` Submodule <a name="`databaseManagementManagedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabase <a name="DatabaseManagementManagedDatabase" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database oci_database_management_managed_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabase(Construct Scope, string Id, DatabaseManagementManagedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig">DatabaseManagementManagedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig">DatabaseManagementManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementManagedDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts">DatabaseManagementManagedDatabaseTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementManagedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databasePlatformName">DatabasePlatformName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseStatus">DatabaseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseSubType">DatabaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dbmgmtFeatureConfigs">DbmgmtFeatureConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.isCluster">IsCluster</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseGroups">ManagedDatabaseGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList">DatabaseManagementManagedDatabaseManagedDatabaseGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managementOption">ManagementOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.parentContainerId">ParentContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.storageSystemId">StorageSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference">DatabaseManagementManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabasePlatformName`<sup>Required</sup> <a name="DatabasePlatformName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databasePlatformName"></a>

```csharp
public string DatabasePlatformName { get; }
```

- *Type:* string

---

##### `DatabaseStatus`<sup>Required</sup> <a name="DatabaseStatus" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseStatus"></a>

```csharp
public string DatabaseStatus { get; }
```

- *Type:* string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseSubType"></a>

```csharp
public string DatabaseSubType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DbmgmtFeatureConfigs`<sup>Required</sup> <a name="DbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dbmgmtFeatureConfigs"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList DbmgmtFeatureConfigs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.isCluster"></a>

```csharp
public IResolvable IsCluster { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagedDatabaseGroups`<sup>Required</sup> <a name="ManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseGroups"></a>

```csharp
public DatabaseManagementManagedDatabaseManagedDatabaseGroupsList ManagedDatabaseGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList">DatabaseManagementManagedDatabaseManagedDatabaseGroupsList</a>

---

##### `ManagementOption`<sup>Required</sup> <a name="ManagementOption" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managementOption"></a>

```csharp
public string ManagementOption { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContainerId`<sup>Required</sup> <a name="ParentContainerId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.parentContainerId"></a>

```csharp
public string ParentContainerId { get; }
```

- *Type:* string

---

##### `StorageSystemId`<sup>Required</sup> <a name="StorageSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.storageSystemId"></a>

```csharp
public string StorageSystemId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference">DatabaseManagementManagedDatabaseTimeoutsOutputReference</a>

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabaseConfig <a name="DatabaseManagementManagedDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatabaseManagementManagedDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#managed_database_id DatabaseManagementManagedDatabase#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#defined_tags DatabaseManagementManagedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#freeform_tags DatabaseManagementManagedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#id DatabaseManagementManagedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts">DatabaseManagementManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#managed_database_id DatabaseManagementManagedDatabase#managed_database_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#defined_tags DatabaseManagementManagedDatabase#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#freeform_tags DatabaseManagementManagedDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#id DatabaseManagementManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseConfig.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts">DatabaseManagementManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#timeouts DatabaseManagementManagedDatabase#timeouts}

---

### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs {

};
```


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails {

};
```


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails {

};
```


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials {

};
```


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString {

};
```


### DatabaseManagementManagedDatabaseManagedDatabaseGroups <a name="DatabaseManagementManagedDatabaseManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseManagedDatabaseGroups {

};
```


### DatabaseManagementManagedDatabaseTimeouts <a name="DatabaseManagementManagedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#create DatabaseManagementManagedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#delete DatabaseManagementManagedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#update DatabaseManagementManagedDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#create DatabaseManagementManagedDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#delete DatabaseManagementManagedDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_database#update DatabaseManagementManagedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId">DatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId">PrivateEndPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DatabaseConnectorId`<sup>Required</sup> <a name="DatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```csharp
public string DatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```csharp
public string PrivateEndPointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails</a>

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a>

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList ConnectionCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails</a>

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference <a name="DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.connectorDetails">ConnectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails">DatabaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.featureStatus">FeatureStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorDetails`<sup>Required</sup> <a name="ConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.connectorDetails"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList ConnectorDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList</a>

---

##### `DatabaseConnectionDetails`<sup>Required</sup> <a name="DatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList DatabaseConnectionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a>

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `FeatureStatus`<sup>Required</sup> <a name="FeatureStatus" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.featureStatus"></a>

```csharp
public string FeatureStatus { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs">DatabaseManagementManagedDatabaseDbmgmtFeatureConfigs</a>

---


### DatabaseManagementManagedDatabaseManagedDatabaseGroupsList <a name="DatabaseManagementManagedDatabaseManagedDatabaseGroupsList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseManagedDatabaseGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get"></a>

```csharp
private DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference <a name="DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroups">DatabaseManagementManagedDatabaseManagedDatabaseGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabaseManagedDatabaseGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseManagedDatabaseGroups">DatabaseManagementManagedDatabaseManagedDatabaseGroups</a>

---


### DatabaseManagementManagedDatabaseTimeoutsOutputReference <a name="DatabaseManagementManagedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabase.DatabaseManagementManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



