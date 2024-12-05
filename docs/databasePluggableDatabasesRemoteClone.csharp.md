# `databasePluggableDatabasesRemoteClone` Submodule <a name="`databasePluggableDatabasesRemoteClone` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasesRemoteClone <a name="DatabasePluggableDatabasesRemoteClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone oci_database_pluggable_databases_remote_clone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClone(Construct Scope, string Id, DatabasePluggableDatabasesRemoteCloneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig">DatabasePluggableDatabasesRemoteCloneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig">DatabasePluggableDatabasesRemoteCloneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetPdbAdminPassword">ResetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetShouldPdbAdminAccountBeLocked">ResetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTargetTdeWalletPassword">ResetTargetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabasePluggableDatabasesRemoteCloneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPdbAdminPassword` <a name="ResetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetPdbAdminPassword"></a>

```csharp
private void ResetPdbAdminPassword()
```

##### `ResetShouldPdbAdminAccountBeLocked` <a name="ResetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetShouldPdbAdminAccountBeLocked"></a>

```csharp
private void ResetShouldPdbAdminAccountBeLocked()
```

##### `ResetTargetTdeWalletPassword` <a name="ResetTargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTargetTdeWalletPassword"></a>

```csharp
private void ResetTargetTdeWalletPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasesRemoteClone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabasesRemoteClone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabasesRemoteClone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabasesRemoteClone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabasesRemoteClone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabasePluggableDatabasesRemoteClone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePluggableDatabasesRemoteClone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePluggableDatabasesRemoteClone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasesRemoteClone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList">DatabasePluggableDatabasesRemoteCloneConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.isRestricted">IsRestricted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference">DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbNameInput">ClonedPdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPasswordInput">PdbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseIdInput">PluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLockedInput">ShouldPdbAdminAccountBeLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPasswordInput">SourceContainerDbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseIdInput">TargetContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPasswordInput">TargetTdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbName">ClonedPdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPassword">SourceContainerDbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseId">TargetContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPassword">TargetTdeWalletPassword</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connectionStrings"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList">DatabasePluggableDatabasesRemoteCloneConnectionStringsList</a>

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.isRestricted"></a>

```csharp
public IResolvable IsRestricted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbNodeLevelDetails"></a>

```csharp
public DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList PdbNodeLevelDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseManagementConfig"></a>

```csharp
public DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList PluggableDatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.refreshableCloneConfig"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList RefreshableCloneConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeouts"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference">DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference</a>

---

##### `ClonedPdbNameInput`<sup>Optional</sup> <a name="ClonedPdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbNameInput"></a>

```csharp
public string ClonedPdbNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PdbAdminPasswordInput`<sup>Optional</sup> <a name="PdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPasswordInput"></a>

```csharp
public string PdbAdminPasswordInput { get; }
```

- *Type:* string

---

##### `PluggableDatabaseIdInput`<sup>Optional</sup> <a name="PluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseIdInput"></a>

```csharp
public string PluggableDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ShouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLockedInput"></a>

```csharp
public object ShouldPdbAdminAccountBeLockedInput { get; }
```

- *Type:* object

---

##### `SourceContainerDbAdminPasswordInput`<sup>Optional</sup> <a name="SourceContainerDbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPasswordInput"></a>

```csharp
public string SourceContainerDbAdminPasswordInput { get; }
```

- *Type:* string

---

##### `TargetContainerDatabaseIdInput`<sup>Optional</sup> <a name="TargetContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseIdInput"></a>

```csharp
public string TargetContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TargetTdeWalletPasswordInput`<sup>Optional</sup> <a name="TargetTdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPasswordInput"></a>

```csharp
public string TargetTdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClonedPdbName`<sup>Required</sup> <a name="ClonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbName"></a>

```csharp
public string ClonedPdbName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPassword"></a>

```csharp
public string PdbAdminPassword { get; }
```

- *Type:* string

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; }
```

- *Type:* string

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLocked"></a>

```csharp
public object ShouldPdbAdminAccountBeLocked { get; }
```

- *Type:* object

---

##### `SourceContainerDbAdminPassword`<sup>Required</sup> <a name="SourceContainerDbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPassword"></a>

```csharp
public string SourceContainerDbAdminPassword { get; }
```

- *Type:* string

---

##### `TargetContainerDatabaseId`<sup>Required</sup> <a name="TargetContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseId"></a>

```csharp
public string TargetContainerDatabaseId { get; }
```

- *Type:* string

---

##### `TargetTdeWalletPassword`<sup>Required</sup> <a name="TargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPassword"></a>

```csharp
public string TargetTdeWalletPassword { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasesRemoteCloneConfig <a name="DatabasePluggableDatabasesRemoteCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClonedPdbName,
    string PluggableDatabaseId,
    string SourceContainerDbAdminPassword,
    string TargetContainerDatabaseId,
    string Id = null,
    string PdbAdminPassword = null,
    object ShouldPdbAdminAccountBeLocked = null,
    string TargetTdeWalletPassword = null,
    DatabasePluggableDatabasesRemoteCloneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.clonedPdbName">ClonedPdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#cloned_pdb_name DatabasePluggableDatabasesRemoteClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pluggable_database_id DatabasePluggableDatabasesRemoteClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.sourceContainerDbAdminPassword">SourceContainerDbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#source_container_db_admin_password DatabasePluggableDatabasesRemoteClone#source_container_db_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetContainerDatabaseId">TargetContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_container_database_id DatabasePluggableDatabasesRemoteClone#target_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#id DatabasePluggableDatabasesRemoteClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pdb_admin_password DatabasePluggableDatabasesRemoteClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesRemoteClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetTdeWalletPassword">TargetTdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_tde_wallet_password DatabasePluggableDatabasesRemoteClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClonedPdbName`<sup>Required</sup> <a name="ClonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.clonedPdbName"></a>

```csharp
public string ClonedPdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#cloned_pdb_name DatabasePluggableDatabasesRemoteClone#cloned_pdb_name}.

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pluggable_database_id DatabasePluggableDatabasesRemoteClone#pluggable_database_id}.

---

##### `SourceContainerDbAdminPassword`<sup>Required</sup> <a name="SourceContainerDbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.sourceContainerDbAdminPassword"></a>

```csharp
public string SourceContainerDbAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#source_container_db_admin_password DatabasePluggableDatabasesRemoteClone#source_container_db_admin_password}.

---

##### `TargetContainerDatabaseId`<sup>Required</sup> <a name="TargetContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetContainerDatabaseId"></a>

```csharp
public string TargetContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_container_database_id DatabasePluggableDatabasesRemoteClone#target_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#id DatabasePluggableDatabasesRemoteClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdbAdminPassword`<sup>Optional</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pdbAdminPassword"></a>

```csharp
public string PdbAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pdb_admin_password DatabasePluggableDatabasesRemoteClone#pdb_admin_password}.

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.shouldPdbAdminAccountBeLocked"></a>

```csharp
public object ShouldPdbAdminAccountBeLocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesRemoteClone#should_pdb_admin_account_be_locked}.

---

##### `TargetTdeWalletPassword`<sup>Optional</sup> <a name="TargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetTdeWalletPassword"></a>

```csharp
public string TargetTdeWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_tde_wallet_password DatabasePluggableDatabasesRemoteClone#target_tde_wallet_password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.timeouts"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#timeouts DatabasePluggableDatabasesRemoteClone#timeouts}

---

### DatabasePluggableDatabasesRemoteCloneConnectionStrings <a name="DatabasePluggableDatabasesRemoteCloneConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneConnectionStrings {

};
```


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails {

};
```


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig {

};
```


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig {

};
```


### DatabasePluggableDatabasesRemoteCloneTimeouts <a name="DatabasePluggableDatabasesRemoteCloneTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#create DatabasePluggableDatabasesRemoteClone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#delete DatabasePluggableDatabasesRemoteClone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#update DatabasePluggableDatabasesRemoteClone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#create DatabasePluggableDatabasesRemoteClone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#delete DatabasePluggableDatabasesRemoteClone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#update DatabasePluggableDatabasesRemoteClone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasesRemoteCloneConnectionStringsList <a name="DatabasePluggableDatabasesRemoteCloneConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get"></a>

```csharp
private DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference <a name="DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings">DatabasePluggableDatabasesRemoteCloneConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbDefault"></a>

```csharp
public string PdbDefault { get; }
```

- *Type:* string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbIpDefault"></a>

```csharp
public string PdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings">DatabasePluggableDatabasesRemoteCloneConnectionStrings</a>

---


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get"></a>

```csharp
private DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get"></a>

```csharp
private DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```csharp
public string ManagementStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get"></a>

```csharp
private DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig</a>

---


### DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference <a name="DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



