# `cloudMigrationsMigrationAsset` Submodule <a name="`cloudMigrationsMigrationAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationAsset <a name="CloudMigrationsMigrationAsset" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudMigrationsMigrationAsset(Construct Scope, string Id, CloudMigrationsMigrationAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig">CloudMigrationsMigrationAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig">CloudMigrationsMigrationAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn">ResetMigrationAssetDependsOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId">ResetReplicationScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudMigrationsMigrationAssetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMigrationAssetDependsOn` <a name="ResetMigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn"></a>

```csharp
private void ResetMigrationAssetDependsOn()
```

##### `ResetReplicationScheduleId` <a name="ResetReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId"></a>

```csharp
private void ResetReplicationScheduleId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudMigrationsMigrationAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudMigrationsMigrationAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudMigrationsMigrationAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudMigrationsMigrationAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudMigrationsMigrationAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudMigrationsMigrationAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy">DependedOnBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications">Notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot">ParentSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots">Snapshots</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId">SourceAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput">InventoryAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput">MigrationAssetDependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput">MigrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput">ReplicationCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput">ReplicationScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput">SnapShotBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId">InventoryAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn">MigrationAssetDependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId">MigrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId">ReplicationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName">SnapShotBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DependedOnBy`<sup>Required</sup> <a name="DependedOnBy" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy"></a>

```csharp
public string[] DependedOnBy { get; }
```

- *Type:* string[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications"></a>

```csharp
public string[] Notifications { get; }
```

- *Type:* string[]

---

##### `ParentSnapshot`<sup>Required</sup> <a name="ParentSnapshot" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot"></a>

```csharp
public string ParentSnapshot { get; }
```

- *Type:* string

---

##### `Snapshots`<sup>Required</sup> <a name="Snapshots" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots"></a>

```csharp
public StringMap Snapshots { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SourceAssetId`<sup>Required</sup> <a name="SourceAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId"></a>

```csharp
public string SourceAssetId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts"></a>

```csharp
public CloudMigrationsMigrationAssetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InventoryAssetIdInput`<sup>Optional</sup> <a name="InventoryAssetIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput"></a>

```csharp
public string InventoryAssetIdInput { get; }
```

- *Type:* string

---

##### `MigrationAssetDependsOnInput`<sup>Optional</sup> <a name="MigrationAssetDependsOnInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput"></a>

```csharp
public string[] MigrationAssetDependsOnInput { get; }
```

- *Type:* string[]

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput"></a>

```csharp
public string MigrationIdInput { get; }
```

- *Type:* string

---

##### `ReplicationCompartmentIdInput`<sup>Optional</sup> <a name="ReplicationCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput"></a>

```csharp
public string ReplicationCompartmentIdInput { get; }
```

- *Type:* string

---

##### `ReplicationScheduleIdInput`<sup>Optional</sup> <a name="ReplicationScheduleIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput"></a>

```csharp
public string ReplicationScheduleIdInput { get; }
```

- *Type:* string

---

##### `SnapShotBucketNameInput`<sup>Optional</sup> <a name="SnapShotBucketNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput"></a>

```csharp
public string SnapShotBucketNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InventoryAssetId`<sup>Required</sup> <a name="InventoryAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId"></a>

```csharp
public string InventoryAssetId { get; }
```

- *Type:* string

---

##### `MigrationAssetDependsOn`<sup>Required</sup> <a name="MigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn"></a>

```csharp
public string[] MigrationAssetDependsOn { get; }
```

- *Type:* string[]

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId"></a>

```csharp
public string MigrationId { get; }
```

- *Type:* string

---

##### `ReplicationCompartmentId`<sup>Required</sup> <a name="ReplicationCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId"></a>

```csharp
public string ReplicationCompartmentId { get; }
```

- *Type:* string

---

##### `ReplicationScheduleId`<sup>Required</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId"></a>

```csharp
public string ReplicationScheduleId { get; }
```

- *Type:* string

---

##### `SnapShotBucketName`<sup>Required</sup> <a name="SnapShotBucketName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName"></a>

```csharp
public string SnapShotBucketName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationAssetConfig <a name="CloudMigrationsMigrationAssetConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudMigrationsMigrationAssetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string InventoryAssetId,
    string MigrationId,
    string ReplicationCompartmentId,
    string SnapShotBucketName,
    string DisplayName = null,
    string Id = null,
    string[] MigrationAssetDependsOn = null,
    string ReplicationScheduleId = null,
    CloudMigrationsMigrationAssetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId">InventoryAssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId">MigrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId">ReplicationCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName">SnapShotBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn">MigrationAssetDependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}.

---

##### `InventoryAssetId`<sup>Required</sup> <a name="InventoryAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId"></a>

```csharp
public string InventoryAssetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}.

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId"></a>

```csharp
public string MigrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}.

---

##### `ReplicationCompartmentId`<sup>Required</sup> <a name="ReplicationCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId"></a>

```csharp
public string ReplicationCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}.

---

##### `SnapShotBucketName`<sup>Required</sup> <a name="SnapShotBucketName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName"></a>

```csharp
public string SnapShotBucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrationAssetDependsOn`<sup>Optional</sup> <a name="MigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn"></a>

```csharp
public string[] MigrationAssetDependsOn { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}.

---

##### `ReplicationScheduleId`<sup>Optional</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId"></a>

```csharp
public string ReplicationScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts"></a>

```csharp
public CloudMigrationsMigrationAssetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#timeouts CloudMigrationsMigrationAsset#timeouts}

---

### CloudMigrationsMigrationAssetTimeouts <a name="CloudMigrationsMigrationAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudMigrationsMigrationAssetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationAssetTimeoutsOutputReference <a name="CloudMigrationsMigrationAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudMigrationsMigrationAssetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



