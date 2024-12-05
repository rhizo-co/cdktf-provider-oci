# `databaseManagementExternalExadataStorageGrid` Submodule <a name="`databaseManagementExternalExadataStorageGrid` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataStorageGrid <a name="DatabaseManagementExternalExadataStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid oci_database_management_external_exadata_storage_grid}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGrid(Construct Scope, string Id, DatabaseManagementExternalExadataStorageGridConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementExternalExadataStorageGridTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalExadataStorageGrid.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalExadataStorageGrid.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalExadataStorageGrid.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalExadataStorageGrid.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalExadataStorageGrid to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalExadataStorageGrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataStorageGrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount">ServerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers">StorageServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput">ExternalExadataStorageGridIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId">ExternalExadataStorageGridId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount"></a>

```csharp
public double ServerCount { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageServers`<sup>Required</sup> <a name="StorageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers"></a>

```csharp
public DatabaseManagementExternalExadataStorageGridStorageServersList StorageServers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts"></a>

```csharp
public DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalExadataStorageGridIdInput`<sup>Optional</sup> <a name="ExternalExadataStorageGridIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput"></a>

```csharp
public string ExternalExadataStorageGridIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalExadataStorageGridId`<sup>Required</sup> <a name="ExternalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId"></a>

```csharp
public string ExternalExadataStorageGridId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataStorageGridConfig <a name="DatabaseManagementExternalExadataStorageGridConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalExadataStorageGridId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatabaseManagementExternalExadataStorageGridTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId">ExternalExadataStorageGridId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalExadataStorageGridId`<sup>Required</sup> <a name="ExternalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId"></a>

```csharp
public string ExternalExadataStorageGridId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts"></a>

```csharp
public DatabaseManagementExternalExadataStorageGridTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#timeouts DatabaseManagementExternalExadataStorageGrid#timeouts}

---

### DatabaseManagementExternalExadataStorageGridStorageServers <a name="DatabaseManagementExternalExadataStorageGridStorageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridStorageServers {

};
```


### DatabaseManagementExternalExadataStorageGridTimeouts <a name="DatabaseManagementExternalExadataStorageGridTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataStorageGridStorageServersList <a name="DatabaseManagementExternalExadataStorageGridStorageServersList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridStorageServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get"></a>

```csharp
private DatabaseManagementExternalExadataStorageGridStorageServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementExternalExadataStorageGridStorageServersOutputReference <a name="DatabaseManagementExternalExadataStorageGridStorageServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridStorageServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel">MakeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops">MaxFlashDiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput">MaxFlashDiskThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops">MaxHardDiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput">MaxHardDiskThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MakeModel`<sup>Required</sup> <a name="MakeModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel"></a>

```csharp
public string MakeModel { get; }
```

- *Type:* string

---

##### `MaxFlashDiskIops`<sup>Required</sup> <a name="MaxFlashDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops"></a>

```csharp
public double MaxFlashDiskIops { get; }
```

- *Type:* double

---

##### `MaxFlashDiskThroughput`<sup>Required</sup> <a name="MaxFlashDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput"></a>

```csharp
public double MaxFlashDiskThroughput { get; }
```

- *Type:* double

---

##### `MaxHardDiskIops`<sup>Required</sup> <a name="MaxHardDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops"></a>

```csharp
public double MaxHardDiskIops { get; }
```

- *Type:* double

---

##### `MaxHardDiskThroughput`<sup>Required</sup> <a name="MaxHardDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput"></a>

```csharp
public double MaxHardDiskThroughput { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementExternalExadataStorageGridStorageServers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a>

---


### DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference <a name="DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



