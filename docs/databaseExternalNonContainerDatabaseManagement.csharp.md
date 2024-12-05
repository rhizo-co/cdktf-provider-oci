# `databaseExternalNonContainerDatabaseManagement` Submodule <a name="`databaseExternalNonContainerDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalNonContainerDatabaseManagement <a name="DatabaseExternalNonContainerDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management oci_database_external_non_container_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseManagement(Construct Scope, string Id, DatabaseExternalNonContainerDatabaseManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig">DatabaseExternalNonContainerDatabaseManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig">DatabaseExternalNonContainerDatabaseManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExternalNonContainerDatabaseManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalNonContainerDatabaseManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalNonContainerDatabaseManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalNonContainerDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalNonContainerDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagementInput">EnableManagementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagement">EnableManagement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeouts"></a>

```csharp
public DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference</a>

---

##### `EnableManagementInput`<sup>Optional</sup> <a name="EnableManagementInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagementInput"></a>

```csharp
public object EnableManagementInput { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorIdInput"></a>

```csharp
public string ExternalDatabaseConnectorIdInput { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseIdInput"></a>

```csharp
public string ExternalNonContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagement"></a>

```csharp
public object EnableManagement { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalNonContainerDatabaseManagementConfig <a name="DatabaseExternalNonContainerDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableManagement,
    string ExternalDatabaseConnectorId,
    string ExternalNonContainerDatabaseId,
    string Id = null,
    string LicenseModel = null,
    DatabaseExternalNonContainerDatabaseManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.enableManagement">EnableManagement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.enableManagement"></a>

```csharp
public object EnableManagement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}.

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.timeouts"></a>

```csharp
public DatabaseExternalNonContainerDatabaseManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#timeouts DatabaseExternalNonContainerDatabaseManagement#timeouts}

---

### DatabaseExternalNonContainerDatabaseManagementTimeouts <a name="DatabaseExternalNonContainerDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#create DatabaseExternalNonContainerDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#delete DatabaseExternalNonContainerDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#update DatabaseExternalNonContainerDatabaseManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#create DatabaseExternalNonContainerDatabaseManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#delete DatabaseExternalNonContainerDatabaseManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#update DatabaseExternalNonContainerDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference <a name="DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



