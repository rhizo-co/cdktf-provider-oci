# `databaseBackup` Submodule <a name="`databaseBackup` Submodule" id="rhizo-co-terraform-provider-oci.databaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseBackup <a name="DatabaseBackup" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup oci_database_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseBackup(Construct Scope, string Id, DatabaseBackupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig">DatabaseBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig">DatabaseBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseBackupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts">DatabaseBackupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseBackup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseSizeInGbs">DatabaseSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.keyStoreWalletName">KeyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference">DatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseSizeInGbs`<sup>Required</sup> <a name="DatabaseSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseSizeInGbs"></a>

```csharp
public double DatabaseSizeInGbs { get; }
```

- *Type:* double

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KeyStoreWalletName`<sup>Required</sup> <a name="KeyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.keyStoreWalletName"></a>

```csharp
public string KeyStoreWalletName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeouts"></a>

```csharp
public DatabaseBackupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference">DatabaseBackupTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseBackupConfig <a name="DatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseBackupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseId,
    string DisplayName,
    string Id = null,
    DatabaseBackupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#database_id DatabaseBackup#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#display_name DatabaseBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#id DatabaseBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts">DatabaseBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#database_id DatabaseBackup#database_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#display_name DatabaseBackup#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#id DatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupConfig.property.timeouts"></a>

```csharp
public DatabaseBackupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts">DatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#timeouts DatabaseBackup#timeouts}

---

### DatabaseBackupTimeouts <a name="DatabaseBackupTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseBackupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#create DatabaseBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#delete DatabaseBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#update DatabaseBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#create DatabaseBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#delete DatabaseBackup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup#update DatabaseBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseBackupTimeoutsOutputReference <a name="DatabaseBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseBackupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseBackup.DatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


