# `databaseDatabaseSoftwareImage` Submodule <a name="`databaseDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseSoftwareImage <a name="DatabaseDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image oci_database_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseSoftwareImage(Construct Scope, string Id, DatabaseDatabaseSoftwareImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig">DatabaseDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig">DatabaseDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches">ResetDatabaseSoftwareImageOneOffPatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion">ResetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily">ResetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory">ResetLsInventory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet">ResetPatchSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId">ResetSourceDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDatabaseSoftwareImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---

##### `ResetDatabaseSoftwareImageOneOffPatches` <a name="ResetDatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches"></a>

```csharp
private void ResetDatabaseSoftwareImageOneOffPatches()
```

##### `ResetDatabaseVersion` <a name="ResetDatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion"></a>

```csharp
private void ResetDatabaseVersion()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageShapeFamily` <a name="ResetImageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily"></a>

```csharp
private void ResetImageShapeFamily()
```

##### `ResetImageType` <a name="ResetImageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetLsInventory` <a name="ResetLsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory"></a>

```csharp
private void ResetLsInventory()
```

##### `ResetPatchSet` <a name="ResetPatchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet"></a>

```csharp
private void ResetPatchSet()
```

##### `ResetSourceDbHomeId` <a name="ResetSourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId"></a>

```csharp
private void ResetSourceDbHomeId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabaseSoftwareImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabaseSoftwareImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabaseSoftwareImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDatabaseSoftwareImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabaseSoftwareImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches">DatabaseSoftwareImageIncludedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary">IncludedPatchesSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput">DatabaseSoftwareImageOneOffPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput">ImageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput">LsInventoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput">PatchSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput">SourceDbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches">DatabaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory">LsInventory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet">PatchSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId">SourceDbHomeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatabaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches"></a>

```csharp
public string[] DatabaseSoftwareImageIncludedPatches { get; }
```

- *Type:* string[]

---

##### `IncludedPatchesSummary`<sup>Required</sup> <a name="IncludedPatchesSummary" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary"></a>

```csharp
public string IncludedPatchesSummary { get; }
```

- *Type:* string

---

##### `IsUpgradeSupported`<sup>Required</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported"></a>

```csharp
public IResolvable IsUpgradeSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts"></a>

```csharp
public DatabaseDatabaseSoftwareImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageOneOffPatchesInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageOneOffPatchesInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput"></a>

```csharp
public string[] DatabaseSoftwareImageOneOffPatchesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput"></a>

```csharp
public string DatabaseVersionInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageShapeFamilyInput`<sup>Optional</sup> <a name="ImageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput"></a>

```csharp
public string ImageShapeFamilyInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `LsInventoryInput`<sup>Optional</sup> <a name="LsInventoryInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput"></a>

```csharp
public string LsInventoryInput { get; }
```

- *Type:* string

---

##### `PatchSetInput`<sup>Optional</sup> <a name="PatchSetInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput"></a>

```csharp
public string PatchSetInput { get; }
```

- *Type:* string

---

##### `SourceDbHomeIdInput`<sup>Optional</sup> <a name="SourceDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput"></a>

```csharp
public string SourceDbHomeIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches"></a>

```csharp
public string[] DatabaseSoftwareImageOneOffPatches { get; }
```

- *Type:* string[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `LsInventory`<sup>Required</sup> <a name="LsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory"></a>

```csharp
public string LsInventory { get; }
```

- *Type:* string

---

##### `PatchSet`<sup>Required</sup> <a name="PatchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet"></a>

```csharp
public string PatchSet { get; }
```

- *Type:* string

---

##### `SourceDbHomeId`<sup>Required</sup> <a name="SourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId"></a>

```csharp
public string SourceDbHomeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseSoftwareImageConfig <a name="DatabaseDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseSoftwareImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string[] DatabaseSoftwareImageOneOffPatches = null,
    string DatabaseVersion = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string ImageShapeFamily = null,
    string ImageType = null,
    string LsInventory = null,
    string PatchSet = null,
    string SourceDbHomeId = null,
    DatabaseDatabaseSoftwareImageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches">DatabaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType">ImageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory">LsInventory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet">PatchSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId">SourceDbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}.

---

##### `DatabaseSoftwareImageOneOffPatches`<sup>Optional</sup> <a name="DatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches"></a>

```csharp
public string[] DatabaseSoftwareImageOneOffPatches { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}.

---

##### `DatabaseVersion`<sup>Optional</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageShapeFamily`<sup>Optional</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}.

---

##### `LsInventory`<sup>Optional</sup> <a name="LsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory"></a>

```csharp
public string LsInventory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}.

---

##### `PatchSet`<sup>Optional</sup> <a name="PatchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet"></a>

```csharp
public string PatchSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}.

---

##### `SourceDbHomeId`<sup>Optional</sup> <a name="SourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId"></a>

```csharp
public string SourceDbHomeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts"></a>

```csharp
public DatabaseDatabaseSoftwareImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#timeouts DatabaseDatabaseSoftwareImage#timeouts}

---

### DatabaseDatabaseSoftwareImageTimeouts <a name="DatabaseDatabaseSoftwareImageTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseSoftwareImageTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseSoftwareImageTimeoutsOutputReference <a name="DatabaseDatabaseSoftwareImageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDatabaseSoftwareImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



