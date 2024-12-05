# `devopsDeployArtifact` Submodule <a name="`devopsDeployArtifact` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployArtifact <a name="DevopsDeployArtifact" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifact(Construct Scope, string Id, DevopsDeployArtifactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig">DevopsDeployArtifactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig">DevopsDeployArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource">PutDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployArtifactSource` <a name="PutDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource"></a>

```csharp
private void PutDeployArtifactSource(DevopsDeployArtifactDeployArtifactSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsDeployArtifactTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployArtifact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployArtifact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployArtifact.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployArtifact.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsDeployArtifact to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsDeployArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource">DeployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput">ArgumentSubstitutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput">DeployArtifactSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput">DeployArtifactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode">ArgumentSubstitutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType">DeployArtifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DeployArtifactSource`<sup>Required</sup> <a name="DeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSourceOutputReference DeployArtifactSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts"></a>

```csharp
public DevopsDeployArtifactTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ArgumentSubstitutionModeInput`<sup>Optional</sup> <a name="ArgumentSubstitutionModeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput"></a>

```csharp
public string ArgumentSubstitutionModeInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployArtifactSourceInput`<sup>Optional</sup> <a name="DeployArtifactSourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSource DeployArtifactSourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `DeployArtifactTypeInput`<sup>Optional</sup> <a name="DeployArtifactTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput"></a>

```csharp
public string DeployArtifactTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ArgumentSubstitutionMode`<sup>Required</sup> <a name="ArgumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode"></a>

```csharp
public string ArgumentSubstitutionMode { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployArtifactType`<sup>Required</sup> <a name="DeployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType"></a>

```csharp
public string DeployArtifactType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployArtifactConfig <a name="DevopsDeployArtifactConfig" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArgumentSubstitutionMode,
    DevopsDeployArtifactDeployArtifactSource DeployArtifactSource,
    string DeployArtifactType,
    string ProjectId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DevopsDeployArtifactTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode">ArgumentSubstitutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource">DeployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType">DeployArtifactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArgumentSubstitutionMode`<sup>Required</sup> <a name="ArgumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode"></a>

```csharp
public string ArgumentSubstitutionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `DeployArtifactSource`<sup>Required</sup> <a name="DeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSource DeployArtifactSource { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `DeployArtifactType`<sup>Required</sup> <a name="DeployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType"></a>

```csharp
public string DeployArtifactType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts"></a>

```csharp
public DevopsDeployArtifactTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

### DevopsDeployArtifactDeployArtifactSource <a name="DevopsDeployArtifactDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactDeployArtifactSource {
    string DeployArtifactSourceType,
    string Base64EncodedContent = null,
    string ChartUrl = null,
    string DeployArtifactPath = null,
    string DeployArtifactVersion = null,
    string HelmArtifactSourceType = null,
    DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource HelmVerificationKeySource = null,
    string ImageDigest = null,
    string ImageUri = null,
    string RepositoryId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType">DeployArtifactSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent">Base64EncodedContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl">ChartUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath">DeployArtifactPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion">DeployArtifactVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType">HelmArtifactSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource">HelmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | helm_verification_key_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest">ImageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}. |

---

##### `DeployArtifactSourceType`<sup>Required</sup> <a name="DeployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType"></a>

```csharp
public string DeployArtifactSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}.

---

##### `Base64EncodedContent`<sup>Optional</sup> <a name="Base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent"></a>

```csharp
public string Base64EncodedContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}.

---

##### `ChartUrl`<sup>Optional</sup> <a name="ChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl"></a>

```csharp
public string ChartUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}.

---

##### `DeployArtifactPath`<sup>Optional</sup> <a name="DeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath"></a>

```csharp
public string DeployArtifactPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}.

---

##### `DeployArtifactVersion`<sup>Optional</sup> <a name="DeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion"></a>

```csharp
public string DeployArtifactVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}.

---

##### `HelmArtifactSourceType`<sup>Optional</sup> <a name="HelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType"></a>

```csharp
public string HelmArtifactSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}.

---

##### `HelmVerificationKeySource`<sup>Optional</sup> <a name="HelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource HelmVerificationKeySource { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

helm_verification_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest"></a>

```csharp
public string ImageDigest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}.

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}.

---

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource {
    string VerificationKeySourceType,
    string CurrentPublicKey = null,
    string PreviousPublicKey = null,
    string VaultSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType">VerificationKeySourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey">CurrentPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey">PreviousPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId">VaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}. |

---

##### `VerificationKeySourceType`<sup>Required</sup> <a name="VerificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType"></a>

```csharp
public string VerificationKeySourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}.

---

##### `CurrentPublicKey`<sup>Optional</sup> <a name="CurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey"></a>

```csharp
public string CurrentPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}.

---

##### `PreviousPublicKey`<sup>Optional</sup> <a name="PreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey"></a>

```csharp
public string PreviousPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}.

---

##### `VaultSecretId`<sup>Optional</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId"></a>

```csharp
public string VaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}.

---

### DevopsDeployArtifactTimeouts <a name="DevopsDeployArtifactTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey">ResetCurrentPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey">ResetPreviousPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId">ResetVaultSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrentPublicKey` <a name="ResetCurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey"></a>

```csharp
private void ResetCurrentPublicKey()
```

##### `ResetPreviousPublicKey` <a name="ResetPreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey"></a>

```csharp
private void ResetPreviousPublicKey()
```

##### `ResetVaultSecretId` <a name="ResetVaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId"></a>

```csharp
private void ResetVaultSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput">CurrentPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput">PreviousPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput">VaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput">VerificationKeySourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">CurrentPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">PreviousPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">VerificationKeySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentPublicKeyInput`<sup>Optional</sup> <a name="CurrentPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput"></a>

```csharp
public string CurrentPublicKeyInput { get; }
```

- *Type:* string

---

##### `PreviousPublicKeyInput`<sup>Optional</sup> <a name="PreviousPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput"></a>

```csharp
public string PreviousPublicKeyInput { get; }
```

- *Type:* string

---

##### `VaultSecretIdInput`<sup>Optional</sup> <a name="VaultSecretIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput"></a>

```csharp
public string VaultSecretIdInput { get; }
```

- *Type:* string

---

##### `VerificationKeySourceTypeInput`<sup>Optional</sup> <a name="VerificationKeySourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput"></a>

```csharp
public string VerificationKeySourceTypeInput { get; }
```

- *Type:* string

---

##### `CurrentPublicKey`<sup>Required</sup> <a name="CurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```csharp
public string CurrentPublicKey { get; }
```

- *Type:* string

---

##### `PreviousPublicKey`<sup>Required</sup> <a name="PreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```csharp
public string PreviousPublicKey { get; }
```

- *Type:* string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```csharp
public string VaultSecretId { get; }
```

- *Type:* string

---

##### `VerificationKeySourceType`<sup>Required</sup> <a name="VerificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```csharp
public string VerificationKeySourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---


### DevopsDeployArtifactDeployArtifactSourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactDeployArtifactSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource">PutHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent">ResetBase64EncodedContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl">ResetChartUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath">ResetDeployArtifactPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion">ResetDeployArtifactVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType">ResetHelmArtifactSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource">ResetHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHelmVerificationKeySource` <a name="PutHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource"></a>

```csharp
private void PutHelmVerificationKeySource(DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `ResetBase64EncodedContent` <a name="ResetBase64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent"></a>

```csharp
private void ResetBase64EncodedContent()
```

##### `ResetChartUrl` <a name="ResetChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl"></a>

```csharp
private void ResetChartUrl()
```

##### `ResetDeployArtifactPath` <a name="ResetDeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath"></a>

```csharp
private void ResetDeployArtifactPath()
```

##### `ResetDeployArtifactVersion` <a name="ResetDeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion"></a>

```csharp
private void ResetDeployArtifactVersion()
```

##### `ResetHelmArtifactSourceType` <a name="ResetHelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType"></a>

```csharp
private void ResetHelmArtifactSourceType()
```

##### `ResetHelmVerificationKeySource` <a name="ResetHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource"></a>

```csharp
private void ResetHelmVerificationKeySource()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest"></a>

```csharp
private void ResetImageDigest()
```

##### `ResetImageUri` <a name="ResetImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId"></a>

```csharp
private void ResetRepositoryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource">HelmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput">Base64EncodedContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput">ChartUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput">DeployArtifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput">DeployArtifactSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput">DeployArtifactVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput">HelmArtifactSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput">HelmVerificationKeySourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent">Base64EncodedContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl">ChartUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath">DeployArtifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType">DeployArtifactSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion">DeployArtifactVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType">HelmArtifactSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HelmVerificationKeySource`<sup>Required</sup> <a name="HelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference HelmVerificationKeySource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a>

---

##### `Base64EncodedContentInput`<sup>Optional</sup> <a name="Base64EncodedContentInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput"></a>

```csharp
public string Base64EncodedContentInput { get; }
```

- *Type:* string

---

##### `ChartUrlInput`<sup>Optional</sup> <a name="ChartUrlInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput"></a>

```csharp
public string ChartUrlInput { get; }
```

- *Type:* string

---

##### `DeployArtifactPathInput`<sup>Optional</sup> <a name="DeployArtifactPathInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput"></a>

```csharp
public string DeployArtifactPathInput { get; }
```

- *Type:* string

---

##### `DeployArtifactSourceTypeInput`<sup>Optional</sup> <a name="DeployArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput"></a>

```csharp
public string DeployArtifactSourceTypeInput { get; }
```

- *Type:* string

---

##### `DeployArtifactVersionInput`<sup>Optional</sup> <a name="DeployArtifactVersionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput"></a>

```csharp
public string DeployArtifactVersionInput { get; }
```

- *Type:* string

---

##### `HelmArtifactSourceTypeInput`<sup>Optional</sup> <a name="HelmArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput"></a>

```csharp
public string HelmArtifactSourceTypeInput { get; }
```

- *Type:* string

---

##### `HelmVerificationKeySourceInput`<sup>Optional</sup> <a name="HelmVerificationKeySourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource HelmVerificationKeySourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput"></a>

```csharp
public string ImageDigestInput { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Base64EncodedContent`<sup>Required</sup> <a name="Base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```csharp
public string Base64EncodedContent { get; }
```

- *Type:* string

---

##### `ChartUrl`<sup>Required</sup> <a name="ChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl"></a>

```csharp
public string ChartUrl { get; }
```

- *Type:* string

---

##### `DeployArtifactPath`<sup>Required</sup> <a name="DeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```csharp
public string DeployArtifactPath { get; }
```

- *Type:* string

---

##### `DeployArtifactSourceType`<sup>Required</sup> <a name="DeployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```csharp
public string DeployArtifactSourceType { get; }
```

- *Type:* string

---

##### `DeployArtifactVersion`<sup>Required</sup> <a name="DeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```csharp
public string DeployArtifactVersion { get; }
```

- *Type:* string

---

##### `HelmArtifactSourceType`<sup>Required</sup> <a name="HelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```csharp
public string HelmArtifactSourceType { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployArtifactDeployArtifactSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---


### DevopsDeployArtifactTimeoutsOutputReference <a name="DevopsDeployArtifactTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployArtifactTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



