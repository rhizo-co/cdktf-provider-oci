# `osmanagementManagedInstance` Submodule <a name="`osmanagementManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstance <a name="OsmanagementManagedInstance" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance oci_osmanagement_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstance(Construct Scope, string Id, OsmanagementManagedInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig">OsmanagementManagedInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig">OsmanagementManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized">ResetIsDataCollectionAuthorized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId">ResetNotificationTopicId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(OsmanagementManagedInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDataCollectionAuthorized` <a name="ResetIsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized"></a>

```csharp
private void ResetIsDataCollectionAuthorized()
```

##### `ResetNotificationTopicId` <a name="ResetNotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId"></a>

```csharp
private void ResetNotificationTopicId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsmanagementManagedInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsmanagementManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous">Autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable">BugUpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources">ChildSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable">EnhancementUpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired">IsRebootRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion">KspliceEffectiveKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot">LastBoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin">LastCheckin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups">ManagedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion">OsKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName">OsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable">OtherUpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource">ParentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount">ScheduledJobCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable">SecurityUpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable">UpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount">WorkRequestCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput">IsDataCollectionAuthorizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput">NotificationTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autonomous`<sup>Required</sup> <a name="Autonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous"></a>

```csharp
public OsmanagementManagedInstanceAutonomousList Autonomous { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a>

---

##### `BugUpdatesAvailable`<sup>Required</sup> <a name="BugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable"></a>

```csharp
public double BugUpdatesAvailable { get; }
```

- *Type:* double

---

##### `ChildSoftwareSources`<sup>Required</sup> <a name="ChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources"></a>

```csharp
public OsmanagementManagedInstanceChildSoftwareSourcesList ChildSoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnhancementUpdatesAvailable`<sup>Required</sup> <a name="EnhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable"></a>

```csharp
public double EnhancementUpdatesAvailable { get; }
```

- *Type:* double

---

##### `IsRebootRequired`<sup>Required</sup> <a name="IsRebootRequired" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired"></a>

```csharp
public IResolvable IsRebootRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KspliceEffectiveKernelVersion`<sup>Required</sup> <a name="KspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```csharp
public string KspliceEffectiveKernelVersion { get; }
```

- *Type:* string

---

##### `LastBoot`<sup>Required</sup> <a name="LastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot"></a>

```csharp
public string LastBoot { get; }
```

- *Type:* string

---

##### `LastCheckin`<sup>Required</sup> <a name="LastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin"></a>

```csharp
public string LastCheckin { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroups`<sup>Required</sup> <a name="ManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups"></a>

```csharp
public OsmanagementManagedInstanceManagedInstanceGroupsList ManagedInstanceGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `OsKernelVersion`<sup>Required</sup> <a name="OsKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion"></a>

```csharp
public string OsKernelVersion { get; }
```

- *Type:* string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName"></a>

```csharp
public string OsName { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `OtherUpdatesAvailable`<sup>Required</sup> <a name="OtherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable"></a>

```csharp
public double OtherUpdatesAvailable { get; }
```

- *Type:* double

---

##### `ParentSoftwareSource`<sup>Required</sup> <a name="ParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource"></a>

```csharp
public OsmanagementManagedInstanceParentSoftwareSourceList ParentSoftwareSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a>

---

##### `ScheduledJobCount`<sup>Required</sup> <a name="ScheduledJobCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount"></a>

```csharp
public double ScheduledJobCount { get; }
```

- *Type:* double

---

##### `SecurityUpdatesAvailable`<sup>Required</sup> <a name="SecurityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable"></a>

```csharp
public double SecurityUpdatesAvailable { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts"></a>

```csharp
public OsmanagementManagedInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a>

---

##### `UpdatesAvailable`<sup>Required</sup> <a name="UpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable"></a>

```csharp
public double UpdatesAvailable { get; }
```

- *Type:* double

---

##### `WorkRequestCount`<sup>Required</sup> <a name="WorkRequestCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount"></a>

```csharp
public double WorkRequestCount { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDataCollectionAuthorizedInput`<sup>Optional</sup> <a name="IsDataCollectionAuthorizedInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput"></a>

```csharp
public object IsDataCollectionAuthorizedInput { get; }
```

- *Type:* object

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `NotificationTopicIdInput`<sup>Optional</sup> <a name="NotificationTopicIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput"></a>

```csharp
public string NotificationTopicIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDataCollectionAuthorized`<sup>Required</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized"></a>

```csharp
public object IsDataCollectionAuthorized { get; }
```

- *Type:* object

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceAutonomous <a name="OsmanagementManagedInstanceAutonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceAutonomous {

};
```


### OsmanagementManagedInstanceChildSoftwareSources <a name="OsmanagementManagedInstanceChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceChildSoftwareSources {

};
```


### OsmanagementManagedInstanceConfig <a name="OsmanagementManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string Id = null,
    object IsDataCollectionAuthorized = null,
    string NotificationTopicId = null,
    OsmanagementManagedInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDataCollectionAuthorized`<sup>Optional</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized"></a>

```csharp
public object IsDataCollectionAuthorized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `NotificationTopicId`<sup>Optional</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts"></a>

```csharp
public OsmanagementManagedInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

### OsmanagementManagedInstanceManagedInstanceGroups <a name="OsmanagementManagedInstanceManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagedInstanceGroups {

};
```


### OsmanagementManagedInstanceParentSoftwareSource <a name="OsmanagementManagedInstanceParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceParentSoftwareSource {

};
```


### OsmanagementManagedInstanceTimeouts <a name="OsmanagementManagedInstanceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceAutonomousList <a name="OsmanagementManagedInstanceAutonomousList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceAutonomousList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get"></a>

```csharp
private OsmanagementManagedInstanceAutonomousOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsmanagementManagedInstanceAutonomousOutputReference <a name="OsmanagementManagedInstanceAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceAutonomousOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled">IsAutoUpdateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsAutoUpdateEnabled`<sup>Required</sup> <a name="IsAutoUpdateEnabled" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```csharp
public IResolvable IsAutoUpdateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue"></a>

```csharp
public OsmanagementManagedInstanceAutonomous InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a>

---


### OsmanagementManagedInstanceChildSoftwareSourcesList <a name="OsmanagementManagedInstanceChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceChildSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get"></a>

```csharp
private OsmanagementManagedInstanceChildSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsmanagementManagedInstanceChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceChildSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public OsmanagementManagedInstanceChildSoftwareSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagedInstanceGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get"></a>

```csharp
private OsmanagementManagedInstanceManagedInstanceGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsmanagementManagedInstanceManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagedInstanceGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue"></a>

```csharp
public OsmanagementManagedInstanceManagedInstanceGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceParentSoftwareSourceList <a name="OsmanagementManagedInstanceParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceParentSoftwareSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get"></a>

```csharp
private OsmanagementManagedInstanceParentSoftwareSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsmanagementManagedInstanceParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceParentSoftwareSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue"></a>

```csharp
public OsmanagementManagedInstanceParentSoftwareSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a>

---


### OsmanagementManagedInstanceTimeoutsOutputReference <a name="OsmanagementManagedInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



