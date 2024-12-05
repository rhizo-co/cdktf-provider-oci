# `databaseCloudDatabaseManagement` Submodule <a name="`databaseCloudDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudDatabaseManagement <a name="DatabaseCloudDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management oci_database_cloud_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagement(Construct Scope, string Id, DatabaseCloudDatabaseManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig">DatabaseCloudDatabaseManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig">DatabaseCloudDatabaseManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails">PutCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId">ResetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentialdetails` <a name="PutCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails"></a>

```csharp
private void PutCredentialdetails(DatabaseCloudDatabaseManagementCredentialdetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseCloudDatabaseManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSslSecretId` <a name="ResetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId"></a>

```csharp
private void ResetSslSecretId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudDatabaseManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudDatabaseManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudDatabaseManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudDatabaseManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseCloudDatabaseManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseCloudDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails">Credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput">CredentialdetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput">EnableManagementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput">ManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput">PrivateEndPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput">SslSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement">EnableManagement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType">ManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId">PrivateEndPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Credentialdetails`<sup>Required</sup> <a name="Credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails"></a>

```csharp
public DatabaseCloudDatabaseManagementCredentialdetailsOutputReference Credentialdetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts"></a>

```csharp
public DatabaseCloudDatabaseManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a>

---

##### `CredentialdetailsInput`<sup>Optional</sup> <a name="CredentialdetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput"></a>

```csharp
public DatabaseCloudDatabaseManagementCredentialdetails CredentialdetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `EnableManagementInput`<sup>Optional</sup> <a name="EnableManagementInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput"></a>

```csharp
public object EnableManagementInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementTypeInput`<sup>Optional</sup> <a name="ManagementTypeInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput"></a>

```csharp
public string ManagementTypeInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivateEndPointIdInput`<sup>Optional</sup> <a name="PrivateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput"></a>

```csharp
public string PrivateEndPointIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SslSecretIdInput`<sup>Optional</sup> <a name="SslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput"></a>

```csharp
public string SslSecretIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement"></a>

```csharp
public object EnableManagement { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType"></a>

```csharp
public string ManagementType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId"></a>

```csharp
public string PrivateEndPointId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudDatabaseManagementConfig <a name="DatabaseCloudDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DatabaseCloudDatabaseManagementCredentialdetails Credentialdetails,
    string DatabaseId,
    object EnableManagement,
    string ManagementType,
    string PrivateEndPointId,
    string ServiceName,
    string Id = null,
    double Port = null,
    string Protocol = null,
    string Role = null,
    string SslSecretId = null,
    DatabaseCloudDatabaseManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails">Credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement">EnableManagement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType">ManagementType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId">PrivateEndPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentialdetails`<sup>Required</sup> <a name="Credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails"></a>

```csharp
public DatabaseCloudDatabaseManagementCredentialdetails Credentialdetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement"></a>

```csharp
public object EnableManagement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType"></a>

```csharp
public string ManagementType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId"></a>

```csharp
public string PrivateEndPointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `SslSecretId`<sup>Optional</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts"></a>

```csharp
public DatabaseCloudDatabaseManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

### DatabaseCloudDatabaseManagementCredentialdetails <a name="DatabaseCloudDatabaseManagementCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagementCredentialdetails {
    string PasswordSecretId,
    string UserName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}. |

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}.

---

### DatabaseCloudDatabaseManagementTimeouts <a name="DatabaseCloudDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudDatabaseManagementCredentialdetailsOutputReference <a name="DatabaseCloudDatabaseManagementCredentialdetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagementCredentialdetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudDatabaseManagementCredentialdetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---


### DatabaseCloudDatabaseManagementTimeoutsOutputReference <a name="DatabaseCloudDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudDatabaseManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



