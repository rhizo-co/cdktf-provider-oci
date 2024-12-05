# `databaseDbSystemsUpgrade` Submodule <a name="`databaseDbSystemsUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystemsUpgrade <a name="DatabaseDbSystemsUpgrade" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade oci_database_db_systems_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgrade(Construct Scope, string Id, DatabaseDbSystemsUpgradeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated">ResetIsSnapshotRetentionDaysForceUpdated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion">ResetNewGiVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion">ResetNewOsVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays">ResetSnapshotRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDbSystemsUpgradeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSnapshotRetentionDaysForceUpdated` <a name="ResetIsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated"></a>

```csharp
private void ResetIsSnapshotRetentionDaysForceUpdated()
```

##### `ResetNewGiVersion` <a name="ResetNewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion"></a>

```csharp
private void ResetNewGiVersion()
```

##### `ResetNewOsVersion` <a name="ResetNewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion"></a>

```csharp
private void ResetNewOsVersion()
```

##### `ResetSnapshotRetentionPeriodInDays` <a name="ResetSnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays"></a>

```csharp
private void ResetSnapshotRetentionPeriodInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystemsUpgrade.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystemsUpgrade.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystemsUpgrade.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystemsUpgrade.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDbSystemsUpgrade to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDbSystemsUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystemsUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId">BackupSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp">PointInTimeDataDiskCloneTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds">VipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput">IsSnapshotRetentionDaysForceUpdatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput">NewGiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput">NewOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput">SnapshotRetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated">IsSnapshotRetentionDaysForceUpdated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion">NewGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion">NewOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId"></a>

```csharp
public string BackupSubnetId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage"></a>

```csharp
public double DataStoragePercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions"></a>

```csharp
public DatabaseDbSystemsUpgradeDbSystemOptionsList DbSystemOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache"></a>

```csharp
public DatabaseDbSystemsUpgradeIormConfigCacheList IormConfigCache { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId"></a>

```csharp
public string LastPatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a>

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="PointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp"></a>

```csharp
public string PointInTimeDataDiskCloneTimestamp { get; }
```

- *Type:* string

---

##### `RecoStorageSizeInGb`<sup>Required</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb"></a>

```csharp
public double RecoStorageSizeInGb { get; }
```

- *Type:* double

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SourceDbSystemId`<sup>Required</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId"></a>

```csharp
public string SourceDbSystemId { get; }
```

- *Type:* string

---

##### `SparseDiskgroup`<sup>Required</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup"></a>

```csharp
public IResolvable SparseDiskgroup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts"></a>

```csharp
public DatabaseDbSystemsUpgradeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds"></a>

```csharp
public string[] VipIds { get; }
```

- *Type:* string[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSnapshotRetentionDaysForceUpdatedInput`<sup>Optional</sup> <a name="IsSnapshotRetentionDaysForceUpdatedInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput"></a>

```csharp
public object IsSnapshotRetentionDaysForceUpdatedInput { get; }
```

- *Type:* object

---

##### `NewGiVersionInput`<sup>Optional</sup> <a name="NewGiVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput"></a>

```csharp
public string NewGiVersionInput { get; }
```

- *Type:* string

---

##### `NewOsVersionInput`<sup>Optional</sup> <a name="NewOsVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput"></a>

```csharp
public string NewOsVersionInput { get; }
```

- *Type:* string

---

##### `SnapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput"></a>

```csharp
public double SnapshotRetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSnapshotRetentionDaysForceUpdated`<sup>Required</sup> <a name="IsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated"></a>

```csharp
public object IsSnapshotRetentionDaysForceUpdated { get; }
```

- *Type:* object

---

##### `NewGiVersion`<sup>Required</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion"></a>

```csharp
public string NewGiVersion { get; }
```

- *Type:* string

---

##### `NewOsVersion`<sup>Required</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion"></a>

```csharp
public string NewOsVersion { get; }
```

- *Type:* string

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays"></a>

```csharp
public double SnapshotRetentionPeriodInDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemsUpgradeConfig <a name="DatabaseDbSystemsUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string DbSystemId,
    string Id = null,
    object IsSnapshotRetentionDaysForceUpdated = null,
    string NewGiVersion = null,
    string NewOsVersion = null,
    double SnapshotRetentionPeriodInDays = null,
    DatabaseDbSystemsUpgradeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated">IsSnapshotRetentionDaysForceUpdated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion">NewGiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion">NewOsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSnapshotRetentionDaysForceUpdated`<sup>Optional</sup> <a name="IsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated"></a>

```csharp
public object IsSnapshotRetentionDaysForceUpdated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `NewGiVersion`<sup>Optional</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion"></a>

```csharp
public string NewGiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `NewOsVersion`<sup>Optional</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion"></a>

```csharp
public string NewOsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `SnapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays"></a>

```csharp
public double SnapshotRetentionPeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts"></a>

```csharp
public DatabaseDbSystemsUpgradeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

### DatabaseDbSystemsUpgradeDbSystemOptions <a name="DatabaseDbSystemsUpgradeDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeDbSystemOptions {

};
```


### DatabaseDbSystemsUpgradeIormConfigCache <a name="DatabaseDbSystemsUpgradeIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCache {

};
```


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlans <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCacheDbPlans {

};
```


### DatabaseDbSystemsUpgradeMaintenanceWindow <a name="DatabaseDbSystemsUpgradeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindow {

};
```


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek {

};
```


### DatabaseDbSystemsUpgradeMaintenanceWindowMonths <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowMonths {

};
```


### DatabaseDbSystemsUpgradeTimeouts <a name="DatabaseDbSystemsUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemsUpgradeDbSystemOptionsList <a name="DatabaseDbSystemsUpgradeDbSystemOptionsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeDbSystemOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference <a name="DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement"></a>

```csharp
public string StorageManagement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeDbSystemOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```csharp
public string FlashCacheLimit { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share"></a>

```csharp
public double Share { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeIormConfigCacheDbPlans InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheList <a name="DatabaseDbSystemsUpgradeIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCacheList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeIormConfigCacheOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeIormConfigCacheOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeIormConfigCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans"></a>

```csharp
public DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList DbPlans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective"></a>

```csharp
public string Objective { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeIormConfigCache InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a>

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemsUpgradeMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a>

---


### DatabaseDbSystemsUpgradeTimeoutsOutputReference <a name="DatabaseDbSystemsUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemsUpgradeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



