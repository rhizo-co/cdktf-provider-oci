# `databaseDatabase` Submodule <a name="`databaseDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabase <a name="DatabaseDatabase" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database oci_database_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabase(Construct Scope, string Id, DatabaseDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig">DatabaseDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig">DatabaseDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKeyStoreId">ResetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyMigration">ResetKmsKeyMigration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyRotation">ResetKmsKeyRotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatabase` <a name="PutDatabase" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase"></a>

```csharp
private void PutDatabase(DatabaseDatabaseDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>

---

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyStoreId` <a name="ResetKeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKeyStoreId"></a>

```csharp
private void ResetKeyStoreId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyMigration` <a name="ResetKmsKeyMigration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyMigration"></a>

```csharp
private void ResetKmsKeyMigration()
```

##### `ResetKmsKeyRotation` <a name="ResetKmsKeyRotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyRotation"></a>

```csharp
private void ResetKmsKeyRotation()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetVaultId"></a>

```csharp
private void ResetVaultId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList">DatabaseDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference">DatabaseDatabaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList">DatabaseDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList">DatabaseDatabaseDbBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.isCdb">IsCdb</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreWalletName">KeyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupDurationInSeconds">LastBackupDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupTimestamp">LastBackupTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastFailedBackupTimestamp">LastFailedBackupTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sidPrefix">SidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceDatabasePointInTimeRecoveryTimestamp">SourceDatabasePointInTimeRecoveryTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference">DatabaseDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseInput">DatabaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeIdInput">DbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreIdInput">KeyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigrationInput">KmsKeyMigrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotationInput">KmsKeyRotationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeId">DbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigration">KmsKeyMigration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotation">KmsKeyRotation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connectionStrings"></a>

```csharp
public DatabaseDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList">DatabaseDatabaseConnectionStringsList</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.database"></a>

```csharp
public DatabaseDatabaseDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference">DatabaseDatabaseDatabaseOutputReference</a>

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseManagementConfig"></a>

```csharp
public DatabaseDatabaseDatabaseManagementConfigList DatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList">DatabaseDatabaseDatabaseManagementConfigList</a>

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbBackupConfig"></a>

```csharp
public DatabaseDatabaseDbBackupConfigList DbBackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList">DatabaseDatabaseDbBackupConfigList</a>

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsCdb`<sup>Required</sup> <a name="IsCdb" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.isCdb"></a>

```csharp
public IResolvable IsCdb { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyStoreWalletName`<sup>Required</sup> <a name="KeyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreWalletName"></a>

```csharp
public string KeyStoreWalletName { get; }
```

- *Type:* string

---

##### `LastBackupDurationInSeconds`<sup>Required</sup> <a name="LastBackupDurationInSeconds" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupDurationInSeconds"></a>

```csharp
public double LastBackupDurationInSeconds { get; }
```

- *Type:* double

---

##### `LastBackupTimestamp`<sup>Required</sup> <a name="LastBackupTimestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupTimestamp"></a>

```csharp
public string LastBackupTimestamp { get; }
```

- *Type:* string

---

##### `LastFailedBackupTimestamp`<sup>Required</sup> <a name="LastFailedBackupTimestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastFailedBackupTimestamp"></a>

```csharp
public string LastFailedBackupTimestamp { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `SidPrefix`<sup>Required</sup> <a name="SidPrefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sidPrefix"></a>

```csharp
public string SidPrefix { get; }
```

- *Type:* string

---

##### `SourceDatabasePointInTimeRecoveryTimestamp`<sup>Required</sup> <a name="SourceDatabasePointInTimeRecoveryTimestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceDatabasePointInTimeRecoveryTimestamp"></a>

```csharp
public string SourceDatabasePointInTimeRecoveryTimestamp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeouts"></a>

```csharp
public DatabaseDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference">DatabaseDatabaseTimeoutsOutputReference</a>

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseInput"></a>

```csharp
public DatabaseDatabaseDatabase DatabaseInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

---

##### `DbHomeIdInput`<sup>Optional</sup> <a name="DbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeIdInput"></a>

```csharp
public string DbHomeIdInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyStoreIdInput`<sup>Optional</sup> <a name="KeyStoreIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreIdInput"></a>

```csharp
public string KeyStoreIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyMigrationInput`<sup>Optional</sup> <a name="KmsKeyMigrationInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigrationInput"></a>

```csharp
public object KmsKeyMigrationInput { get; }
```

- *Type:* object

---

##### `KmsKeyRotationInput`<sup>Optional</sup> <a name="KmsKeyRotationInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotationInput"></a>

```csharp
public double KmsKeyRotationInput { get; }
```

- *Type:* double

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `DbHomeId`<sup>Required</sup> <a name="DbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeId"></a>

```csharp
public string DbHomeId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyMigration`<sup>Required</sup> <a name="KmsKeyMigration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigration"></a>

```csharp
public object KmsKeyMigration { get; }
```

- *Type:* object

---

##### `KmsKeyRotation`<sup>Required</sup> <a name="KmsKeyRotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotation"></a>

```csharp
public double KmsKeyRotation { get; }
```

- *Type:* double

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseConfig <a name="DatabaseDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DatabaseDatabaseDatabase Database,
    string DbHomeId,
    string Source,
    string DbVersion = null,
    string Id = null,
    string KeyStoreId = null,
    string KmsKeyId = null,
    object KmsKeyMigration = null,
    double KmsKeyRotation = null,
    string KmsKeyVersionId = null,
    DatabaseDatabaseTimeouts Timeouts = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbHomeId">DbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyMigration">KmsKeyMigration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyRotation">KmsKeyRotation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.database"></a>

```csharp
public DatabaseDatabaseDatabase Database { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database DatabaseDatabase#database}

---

##### `DbHomeId`<sup>Required</sup> <a name="DbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbHomeId"></a>

```csharp
public string DbHomeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyStoreId`<sup>Optional</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

##### `KmsKeyMigration`<sup>Optional</sup> <a name="KmsKeyMigration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyMigration"></a>

```csharp
public object KmsKeyMigration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}.

---

##### `KmsKeyRotation`<sup>Optional</sup> <a name="KmsKeyRotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyRotation"></a>

```csharp
public double KmsKeyRotation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.timeouts"></a>

```csharp
public DatabaseDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#timeouts DatabaseDatabase#timeouts}

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

### DatabaseDatabaseConnectionStrings <a name="DatabaseDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseConnectionStrings {

};
```


### DatabaseDatabaseDatabase <a name="DatabaseDatabaseDatabase" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabase {
    string AdminPassword,
    string DbName,
    string BackupId = null,
    string BackupTdePassword = null,
    string CharacterSet = null,
    string DatabaseSoftwareImageId = null,
    DatabaseDatabaseDatabaseDbBackupConfig DbBackupConfig = null,
    string DbUniqueName = null,
    string DbWorkload = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string KmsKeyId = null,
    string KmsKeyVersionId = null,
    string NcharacterSet = null,
    string PdbName = null,
    string[] PluggableDatabases = null,
    string SidPrefix = null,
    string TdeWalletPassword = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.sidPrefix">SidPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}.

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}.

---

##### `BackupTdePassword`<sup>Optional</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}.

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}.

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbBackupConfig"></a>

```csharp
public DatabaseDatabaseDatabaseDbBackupConfig DbBackupConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_backup_config DatabaseDatabase#db_backup_config}

---

##### `DbUniqueName`<sup>Optional</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}.

---

##### `PluggableDatabases`<sup>Optional</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}.

---

##### `SidPrefix`<sup>Optional</sup> <a name="SidPrefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.sidPrefix"></a>

```csharp
public string SidPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

### DatabaseDatabaseDatabaseDbBackupConfig <a name="DatabaseDatabaseDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseDbBackupConfig {
    object AutoBackupEnabled = null,
    string AutoBackupWindow = null,
    string AutoFullBackupDay = null,
    string AutoFullBackupWindow = null,
    string BackupDeletionPolicy = null,
    object BackupDestinationDetails = null,
    double RecoveryWindowInDays = null,
    object RunImmediateFullBackup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>object</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}.

---

##### `AutoBackupWindow`<sup>Optional</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}.

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}.

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}.

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}.

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```csharp
public object BackupDestinationDetails { get; set; }
```

- *Type:* object

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_destination_details DatabaseDatabase#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}.

---

##### `RunImmediateFullBackup`<sup>Optional</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}.

---

### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails {
    string DbrsPolicyId = null,
    string Id = null,
    string Type = null,
    string VpcUser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#dbrs_policy_id DatabaseDatabase#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#type DatabaseDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.vpcUser">VpcUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vpc_user DatabaseDatabase#vpc_user}. |

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#dbrs_policy_id DatabaseDatabase#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#type DatabaseDatabase#type}.

---

##### `VpcUser`<sup>Optional</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```csharp
public string VpcUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vpc_user DatabaseDatabase#vpc_user}.

---

### DatabaseDatabaseDatabaseManagementConfig <a name="DatabaseDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseManagementConfig {

};
```


### DatabaseDatabaseDbBackupConfig <a name="DatabaseDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfig {

};
```


### DatabaseDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfigBackupDestinationDetails {

};
```


### DatabaseDatabaseTimeouts <a name="DatabaseDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseConnectionStringsList <a name="DatabaseDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get"></a>

```csharp
private DatabaseDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDatabaseConnectionStringsOutputReference <a name="DatabaseDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbDefault">CdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbIpDefault">CdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings">DatabaseDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CdbDefault`<sup>Required</sup> <a name="CdbDefault" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```csharp
public string CdbDefault { get; }
```

- *Type:* string

---

##### `CdbIpDefault`<sup>Required</sup> <a name="CdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```csharp
public string CdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings">DatabaseDatabaseConnectionStrings</a>

---


### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">ResetVpcUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```csharp
private void ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVpcUser` <a name="ResetVpcUser" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```csharp
private void ResetVpcUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">VpcUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">VpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```csharp
public string DbrsPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcUserInput`<sup>Optional</sup> <a name="VpcUserInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```csharp
public string VpcUserInput { get; }
```

- *Type:* string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcUser`<sup>Required</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```csharp
public string VpcUser { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDatabaseDatabaseDbBackupConfigOutputReference <a name="DatabaseDatabaseDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseDbBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">ResetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">ResetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```csharp
private void PutBackupDestinationDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```csharp
private void ResetAutoBackupEnabled()
```

##### `ResetAutoBackupWindow` <a name="ResetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```csharp
private void ResetAutoBackupWindow()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```csharp
private void ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```csharp
private void ResetAutoFullBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```csharp
private void ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```csharp
private void ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```csharp
private void ResetRecoveryWindowInDays()
```

##### `ResetRunImmediateFullBackup` <a name="ResetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```csharp
private void ResetRunImmediateFullBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">AutoBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">RunImmediateFullBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```csharp
public object AutoBackupEnabledInput { get; }
```

- *Type:* object

---

##### `AutoBackupWindowInput`<sup>Optional</sup> <a name="AutoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```csharp
public string AutoBackupWindowInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```csharp
public string AutoFullBackupDayInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```csharp
public string AutoFullBackupWindowInput { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```csharp
public string BackupDeletionPolicyInput { get; }
```

- *Type:* string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```csharp
public object BackupDestinationDetailsInput { get; }
```

- *Type:* object

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```csharp
public double RecoveryWindowInDaysInput { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackupInput`<sup>Optional</sup> <a name="RunImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```csharp
public object RunImmediateFullBackupInput { get; }
```

- *Type:* object

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; }
```

- *Type:* object

---

##### `AutoBackupWindow`<sup>Required</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; }
```

- *Type:* string

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; }
```

- *Type:* string

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackup`<sup>Required</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseDatabaseDbBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

---


### DatabaseDatabaseDatabaseManagementConfigList <a name="DatabaseDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get"></a>

```csharp
private DatabaseDatabaseDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDatabaseDatabaseManagementConfigOutputReference <a name="DatabaseDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementType">ManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig">DatabaseDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```csharp
public string ManagementStatus { get; }
```

- *Type:* string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementType"></a>

```csharp
public string ManagementType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig">DatabaseDatabaseDatabaseManagementConfig</a>

---


### DatabaseDatabaseDatabaseOutputReference <a name="DatabaseDatabaseDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupTdePassword">ResetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbUniqueName">ResetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPluggableDatabases">ResetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetSidPrefix">ResetSidPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig"></a>

```csharp
private void PutDbBackupConfig(DatabaseDatabaseDatabaseDbBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

---

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetBackupTdePassword` <a name="ResetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupTdePassword"></a>

```csharp
private void ResetBackupTdePassword()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbBackupConfig"></a>

```csharp
private void ResetDbBackupConfig()
```

##### `ResetDbUniqueName` <a name="ResetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbUniqueName"></a>

```csharp
private void ResetDbUniqueName()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbWorkload"></a>

```csharp
private void ResetDbWorkload()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetNcharacterSet"></a>

```csharp
private void ResetNcharacterSet()
```

##### `ResetPdbName` <a name="ResetPdbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPdbName"></a>

```csharp
private void ResetPdbName()
```

##### `ResetPluggableDatabases` <a name="ResetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPluggableDatabases"></a>

```csharp
private void ResetPluggableDatabases()
```

##### `ResetSidPrefix` <a name="ResetSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetSidPrefix"></a>

```csharp
private void ResetSidPrefix()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetTdeWalletPassword"></a>

```csharp
private void ResetTdeWalletPassword()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference">DatabaseDatabaseDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePasswordInput">BackupTdePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabasesInput">PluggableDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefixInput">SidPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefix">SidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfig"></a>

```csharp
public DatabaseDatabaseDatabaseDbBackupConfigOutputReference DbBackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference">DatabaseDatabaseDatabaseDbBackupConfigOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `BackupTdePasswordInput`<sup>Optional</sup> <a name="BackupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePasswordInput"></a>

```csharp
public string BackupTdePasswordInput { get; }
```

- *Type:* string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfigInput"></a>

```csharp
public DatabaseDatabaseDatabaseDbBackupConfig DbBackupConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueNameInput"></a>

```csharp
public string DbUniqueNameInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `PluggableDatabasesInput`<sup>Optional</sup> <a name="PluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```csharp
public string[] PluggableDatabasesInput { get; }
```

- *Type:* string[]

---

##### `SidPrefixInput`<sup>Optional</sup> <a name="SidPrefixInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefixInput"></a>

```csharp
public string SidPrefixInput { get; }
```

- *Type:* string

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```csharp
public string TdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `BackupTdePassword`<sup>Required</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `PluggableDatabases`<sup>Required</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; }
```

- *Type:* string[]

---

##### `SidPrefix`<sup>Required</sup> <a name="SidPrefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefix"></a>

```csharp
public string SidPrefix { get; }
```

- *Type:* string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseDatabase InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

---


### DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">VpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcUser`<sup>Required</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```csharp
public string VpcUser { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseDbBackupConfigBackupDestinationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>

---


### DatabaseDatabaseDbBackupConfigList <a name="DatabaseDatabaseDbBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get"></a>

```csharp
private DatabaseDatabaseDbBackupConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDatabaseDbBackupConfigOutputReference <a name="DatabaseDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseDbBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig">DatabaseDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```csharp
public IResolvable AutoBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoBackupWindow`<sup>Required</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; }
```

- *Type:* string

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackup`<sup>Required</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```csharp
public IResolvable RunImmediateFullBackup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseDatabaseDbBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig">DatabaseDatabaseDbBackupConfig</a>

---


### DatabaseDatabaseTimeoutsOutputReference <a name="DatabaseDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



