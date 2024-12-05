# `databaseDbHome` Submodule <a name="`databaseDbHome` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbHome"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbHome <a name="DatabaseDbHome" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home oci_database_db_home}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHome(Construct Scope, string Id, DatabaseDbHomeConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig">DatabaseDbHomeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig">DatabaseDbHomeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete">ResetEnableDatabaseDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion">ResetIsDesupportedVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled">ResetIsUnifiedAuditingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId">ResetVmClusterId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatabase` <a name="PutDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase"></a>

```csharp
private void PutDatabase(DatabaseDbHomeDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDbHomeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableDatabaseDelete` <a name="ResetEnableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete"></a>

```csharp
private void ResetEnableDatabaseDelete()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDesupportedVersion` <a name="ResetIsDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion"></a>

```csharp
private void ResetIsDesupportedVersion()
```

##### `ResetIsUnifiedAuditingEnabled` <a name="ResetIsUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled"></a>

```csharp
private void ResetIsUnifiedAuditingEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVmClusterId` <a name="ResetVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId"></a>

```csharp
private void ResetVmClusterId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbHome.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbHome.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbHome.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbHome.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDbHome to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDbHome that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbHome to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation">DbHomeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput">DatabaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput">EnableDatabaseDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput">IsDesupportedVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput">IsUnifiedAuditingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete">EnableDatabaseDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion">IsDesupportedVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database"></a>

```csharp
public DatabaseDbHomeDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a>

---

##### `DbHomeLocation`<sup>Required</sup> <a name="DbHomeLocation" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation"></a>

```csharp
public string DbHomeLocation { get; }
```

- *Type:* string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId"></a>

```csharp
public string LastPatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts"></a>

```csharp
public DatabaseDbHomeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput"></a>

```csharp
public DatabaseDbHomeDatabase DatabaseInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableDatabaseDeleteInput`<sup>Optional</sup> <a name="EnableDatabaseDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput"></a>

```csharp
public object EnableDatabaseDeleteInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDesupportedVersionInput`<sup>Optional</sup> <a name="IsDesupportedVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput"></a>

```csharp
public object IsDesupportedVersionInput { get; }
```

- *Type:* object

---

##### `IsUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput"></a>

```csharp
public object IsUnifiedAuditingEnabledInput { get; }
```

- *Type:* object

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableDatabaseDelete`<sup>Required</sup> <a name="EnableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete"></a>

```csharp
public object EnableDatabaseDelete { get; }
```

- *Type:* object

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDesupportedVersion`<sup>Required</sup> <a name="IsDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion"></a>

```csharp
public object IsDesupportedVersion { get; }
```

- *Type:* object

---

##### `IsUnifiedAuditingEnabled`<sup>Required</sup> <a name="IsUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled"></a>

```csharp
public object IsUnifiedAuditingEnabled { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbHomeConfig <a name="DatabaseDbHomeConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DatabaseDbHomeDatabase Database = null,
    string DatabaseSoftwareImageId = null,
    string DbSystemId = null,
    string DbVersion = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    object EnableDatabaseDelete = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsDesupportedVersion = null,
    object IsUnifiedAuditingEnabled = null,
    string KmsKeyId = null,
    string KmsKeyVersionId = null,
    string Source = null,
    DatabaseDbHomeTimeouts Timeouts = null,
    string VmClusterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete">EnableDatabaseDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion">IsDesupportedVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Optional</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database"></a>

```csharp
public DatabaseDbHomeDatabase Database { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database DatabaseDbHome#database}

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}.

---

##### `EnableDatabaseDelete`<sup>Optional</sup> <a name="EnableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete"></a>

```csharp
public object EnableDatabaseDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDesupportedVersion`<sup>Optional</sup> <a name="IsDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion"></a>

```csharp
public object IsDesupportedVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}.

---

##### `IsUnifiedAuditingEnabled`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled"></a>

```csharp
public object IsUnifiedAuditingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts"></a>

```csharp
public DatabaseDbHomeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#timeouts DatabaseDbHome#timeouts}

---

##### `VmClusterId`<sup>Optional</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}.

---

### DatabaseDbHomeDatabase <a name="DatabaseDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabase {
    string AdminPassword,
    string BackupId = null,
    string BackupTdePassword = null,
    string CharacterSet = null,
    string DatabaseId = null,
    string DatabaseSoftwareImageId = null,
    DatabaseDbHomeDatabaseDbBackupConfig DbBackupConfig = null,
    string DbName = null,
    string DbWorkload = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string KeyStoreId = null,
    string KmsKeyId = null,
    string KmsKeyVersionId = null,
    string NcharacterSet = null,
    string PdbName = null,
    string[] PluggableDatabases = null,
    string TdeWalletPassword = null,
    string TimeStampForPointInTimeRecovery = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}.

---

##### `BackupTdePassword`<sup>Optional</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}.

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig"></a>

```csharp
public DatabaseDbHomeDatabaseDbBackupConfig DbBackupConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_backup_config DatabaseDbHome#db_backup_config}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `KeyStoreId`<sup>Optional</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}.

---

##### `PluggableDatabases`<sup>Optional</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}.

---

##### `TimeStampForPointInTimeRecovery`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```csharp
public string TimeStampForPointInTimeRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}.

---

### DatabaseDbHomeDatabaseConnectionStrings <a name="DatabaseDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseConnectionStrings {

};
```


### DatabaseDbHomeDatabaseDbBackupConfig <a name="DatabaseDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseDbBackupConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>object</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}.

---

##### `AutoBackupWindow`<sup>Optional</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}.

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}.

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}.

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}.

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```csharp
public object BackupDestinationDetails { get; set; }
```

- *Type:* object

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_destination_details DatabaseDbHome#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}.

---

##### `RunImmediateFullBackup`<sup>Optional</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}.

---

### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
    string DbrsPolicyId = null,
    string Id = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}. |

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}.

---

### DatabaseDbHomeTimeouts <a name="DatabaseDbHomeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbHomeDatabaseConnectionStringsList <a name="DatabaseDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get"></a>

```csharp
private DatabaseDbHomeDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">CdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">CdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CdbDefault`<sup>Required</sup> <a name="CdbDefault" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```csharp
public string CdbDefault { get; }
```

- *Type:* string

---

##### `CdbIpDefault`<sup>Required</sup> <a name="CdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```csharp
public string CdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbHomeDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```csharp
private void ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```csharp
public string DbrsPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseDbBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">ResetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">ResetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```csharp
private void PutBackupDestinationDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```csharp
private void ResetAutoBackupEnabled()
```

##### `ResetAutoBackupWindow` <a name="ResetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```csharp
private void ResetAutoBackupWindow()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```csharp
private void ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```csharp
private void ResetAutoFullBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```csharp
private void ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```csharp
private void ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```csharp
private void ResetRecoveryWindowInDays()
```

##### `ResetRunImmediateFullBackup` <a name="ResetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```csharp
private void ResetRunImmediateFullBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">AutoBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">RunImmediateFullBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```csharp
public object AutoBackupEnabledInput { get; }
```

- *Type:* object

---

##### `AutoBackupWindowInput`<sup>Optional</sup> <a name="AutoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```csharp
public string AutoBackupWindowInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```csharp
public string AutoFullBackupDayInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```csharp
public string AutoFullBackupWindowInput { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```csharp
public string BackupDeletionPolicyInput { get; }
```

- *Type:* string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```csharp
public object BackupDestinationDetailsInput { get; }
```

- *Type:* object

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```csharp
public double RecoveryWindowInDaysInput { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackupInput`<sup>Optional</sup> <a name="RunImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```csharp
public object RunImmediateFullBackupInput { get; }
```

- *Type:* object

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; }
```

- *Type:* object

---

##### `AutoBackupWindow`<sup>Required</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; }
```

- *Type:* string

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; }
```

- *Type:* string

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackup`<sup>Required</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbHomeDatabaseDbBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbHomeDatabaseOutputReference <a name="DatabaseDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword">ResetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId">ResetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases">ResetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">ResetTimeStampForPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```csharp
private void PutDbBackupConfig(DatabaseDbHomeDatabaseDbBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetBackupTdePassword` <a name="ResetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```csharp
private void ResetBackupTdePassword()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```csharp
private void ResetDbBackupConfig()
```

##### `ResetDbName` <a name="ResetDbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```csharp
private void ResetDbWorkload()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetKeyStoreId` <a name="ResetKeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId"></a>

```csharp
private void ResetKeyStoreId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```csharp
private void ResetNcharacterSet()
```

##### `ResetPdbName` <a name="ResetPdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName"></a>

```csharp
private void ResetPdbName()
```

##### `ResetPluggableDatabases` <a name="ResetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```csharp
private void ResetPluggableDatabases()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```csharp
private void ResetTdeWalletPassword()
```

##### `ResetTimeStampForPointInTimeRecovery` <a name="ResetTimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```csharp
private void ResetTimeStampForPointInTimeRecovery()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches">OneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix">SidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput">BackupTdePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput">KeyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">PluggableDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">TimeStampForPointInTimeRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```csharp
public DatabaseDbHomeDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a>

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```csharp
public DatabaseDbHomeDatabaseDbBackupConfigOutputReference DbBackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OneOffPatches`<sup>Required</sup> <a name="OneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches"></a>

```csharp
public string[] OneOffPatches { get; }
```

- *Type:* string[]

---

##### `SidPrefix`<sup>Required</sup> <a name="SidPrefix" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix"></a>

```csharp
public string SidPrefix { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `BackupTdePasswordInput`<sup>Optional</sup> <a name="BackupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```csharp
public string BackupTdePasswordInput { get; }
```

- *Type:* string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```csharp
public DatabaseDbHomeDatabaseDbBackupConfig DbBackupConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyStoreIdInput`<sup>Optional</sup> <a name="KeyStoreIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput"></a>

```csharp
public string KeyStoreIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `PluggableDatabasesInput`<sup>Optional</sup> <a name="PluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```csharp
public string[] PluggableDatabasesInput { get; }
```

- *Type:* string[]

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```csharp
public string TdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `TimeStampForPointInTimeRecoveryInput`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecoveryInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```csharp
public string TimeStampForPointInTimeRecoveryInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `BackupTdePassword`<sup>Required</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `PluggableDatabases`<sup>Required</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; }
```

- *Type:* string[]

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

##### `TimeStampForPointInTimeRecovery`<sup>Required</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```csharp
public string TimeStampForPointInTimeRecovery { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbHomeDatabase InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---


### DatabaseDbHomeTimeoutsOutputReference <a name="DatabaseDbHomeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbHomeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



