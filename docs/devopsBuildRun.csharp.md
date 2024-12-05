# `devopsBuildRun` Submodule <a name="`devopsBuildRun` Submodule" id="rhizo-co-terraform-provider-oci.devopsBuildRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsBuildRun <a name="DevopsBuildRun" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run oci_devops_build_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRun(Construct Scope, string Id, DevopsBuildRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig">DevopsBuildRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig">DevopsBuildRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments">PutBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo">PutCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetBuildRunArguments">ResetBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetCommitInfo">ResetCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildRunArguments` <a name="PutBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments"></a>

```csharp
private void PutBuildRunArguments(DevopsBuildRunBuildRunArguments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---

##### `PutCommitInfo` <a name="PutCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo"></a>

```csharp
private void PutCommitInfo(DevopsBuildRunCommitInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsBuildRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

---

##### `ResetBuildRunArguments` <a name="ResetBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetBuildRunArguments"></a>

```csharp
private void ResetBuildRunArguments()
```

##### `ResetCommitInfo` <a name="ResetCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetCommitInfo"></a>

```csharp
private void ResetCommitInfo()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsBuildRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsBuildRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsBuildRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsBuildRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsBuildRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsBuildRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsBuildRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsBuildRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsBuildRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildOutputs">BuildOutputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList">DevopsBuildRunBuildOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArguments">BuildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference">DevopsBuildRunBuildRunArgumentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunProgress">BuildRunProgress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList">DevopsBuildRunBuildRunProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunSource">BuildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList">DevopsBuildRunBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfo">CommitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference">DevopsBuildRunCommitInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference">DevopsBuildRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineIdInput">BuildPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArgumentsInput">BuildRunArgumentsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfoInput">CommitInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BuildOutputs`<sup>Required</sup> <a name="BuildOutputs" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildOutputs"></a>

```csharp
public DevopsBuildRunBuildOutputsList BuildOutputs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList">DevopsBuildRunBuildOutputsList</a>

---

##### `BuildRunArguments`<sup>Required</sup> <a name="BuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArguments"></a>

```csharp
public DevopsBuildRunBuildRunArgumentsOutputReference BuildRunArguments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference">DevopsBuildRunBuildRunArgumentsOutputReference</a>

---

##### `BuildRunProgress`<sup>Required</sup> <a name="BuildRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunProgress"></a>

```csharp
public DevopsBuildRunBuildRunProgressList BuildRunProgress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList">DevopsBuildRunBuildRunProgressList</a>

---

##### `BuildRunSource`<sup>Required</sup> <a name="BuildRunSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunSource"></a>

```csharp
public DevopsBuildRunBuildRunSourceList BuildRunSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList">DevopsBuildRunBuildRunSourceList</a>

---

##### `CommitInfo`<sup>Required</sup> <a name="CommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfo"></a>

```csharp
public DevopsBuildRunCommitInfoOutputReference CommitInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference">DevopsBuildRunCommitInfoOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeouts"></a>

```csharp
public DevopsBuildRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference">DevopsBuildRunTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `BuildPipelineIdInput`<sup>Optional</sup> <a name="BuildPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineIdInput"></a>

```csharp
public string BuildPipelineIdInput { get; }
```

- *Type:* string

---

##### `BuildRunArgumentsInput`<sup>Optional</sup> <a name="BuildRunArgumentsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArgumentsInput"></a>

```csharp
public DevopsBuildRunBuildRunArguments BuildRunArgumentsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---

##### `CommitInfoInput`<sup>Optional</sup> <a name="CommitInfoInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfoInput"></a>

```csharp
public DevopsBuildRunCommitInfo CommitInfoInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsBuildRunBuildOutputs <a name="DevopsBuildRunBuildOutputs" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputs {

};
```


### DevopsBuildRunBuildOutputsArtifactOverrideParameters <a name="DevopsBuildRunBuildOutputsArtifactOverrideParameters" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParameters {

};
```


### DevopsBuildRunBuildOutputsArtifactOverrideParametersItems <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParametersItems {

};
```


### DevopsBuildRunBuildOutputsDeliveredArtifacts <a name="DevopsBuildRunBuildOutputsDeliveredArtifacts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifacts {

};
```


### DevopsBuildRunBuildOutputsDeliveredArtifactsItems <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifactsItems {

};
```


### DevopsBuildRunBuildOutputsExportedVariables <a name="DevopsBuildRunBuildOutputsExportedVariables" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariables {

};
```


### DevopsBuildRunBuildOutputsExportedVariablesItems <a name="DevopsBuildRunBuildOutputsExportedVariablesItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariablesItems {

};
```


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection {

};
```


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems {

};
```


### DevopsBuildRunBuildRunArguments <a name="DevopsBuildRunBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunArguments {
    object Items
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#items DevopsBuildRun#items}

---

### DevopsBuildRunBuildRunArgumentsItems <a name="DevopsBuildRunBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunArgumentsItems {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#name DevopsBuildRun#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#value DevopsBuildRun#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#name DevopsBuildRun#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#value DevopsBuildRun#value}.

---

### DevopsBuildRunBuildRunProgress <a name="DevopsBuildRunBuildRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunProgress {

};
```


### DevopsBuildRunBuildRunSource <a name="DevopsBuildRunBuildRunSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSource {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfo <a name="DevopsBuildRunBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfo {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActions <a name="DevopsBuildRunBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActions {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude {

};
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter {

};
```


### DevopsBuildRunCommitInfo <a name="DevopsBuildRunCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunCommitInfo {
    string CommitHash,
    string RepositoryBranch,
    string RepositoryUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.commitHash">CommitHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_hash DevopsBuildRun#commit_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryBranch">RepositoryBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_branch DevopsBuildRun#repository_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_url DevopsBuildRun#repository_url}. |

---

##### `CommitHash`<sup>Required</sup> <a name="CommitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.commitHash"></a>

```csharp
public string CommitHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_hash DevopsBuildRun#commit_hash}.

---

##### `RepositoryBranch`<sup>Required</sup> <a name="RepositoryBranch" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryBranch"></a>

```csharp
public string RepositoryBranch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_branch DevopsBuildRun#repository_branch}.

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_url DevopsBuildRun#repository_url}.

---

### DevopsBuildRunConfig <a name="DevopsBuildRunConfig" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BuildPipelineId,
    DevopsBuildRunBuildRunArguments BuildRunArguments = null,
    DevopsBuildRunCommitInfo CommitInfo = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DevopsBuildRunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_pipeline_id DevopsBuildRun#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildRunArguments">BuildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | build_run_arguments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.commitInfo">CommitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | commit_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#defined_tags DevopsBuildRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#display_name DevopsBuildRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#freeform_tags DevopsBuildRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#id DevopsBuildRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_pipeline_id DevopsBuildRun#build_pipeline_id}.

---

##### `BuildRunArguments`<sup>Optional</sup> <a name="BuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildRunArguments"></a>

```csharp
public DevopsBuildRunBuildRunArguments BuildRunArguments { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

build_run_arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_run_arguments DevopsBuildRun#build_run_arguments}

---

##### `CommitInfo`<sup>Optional</sup> <a name="CommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.commitInfo"></a>

```csharp
public DevopsBuildRunCommitInfo CommitInfo { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

commit_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_info DevopsBuildRun#commit_info}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#defined_tags DevopsBuildRun#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#display_name DevopsBuildRun#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#freeform_tags DevopsBuildRun#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#id DevopsBuildRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.timeouts"></a>

```csharp
public DevopsBuildRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#timeouts DevopsBuildRun#timeouts}

---

### DevopsBuildRunTimeouts <a name="DevopsBuildRunTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#create DevopsBuildRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#delete DevopsBuildRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#update DevopsBuildRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#create DevopsBuildRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#delete DevopsBuildRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#update DevopsBuildRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsArtifactOverrideParametersItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a>

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersList <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters">DevopsBuildRunBuildOutputsArtifactOverrideParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items"></a>

```csharp
public DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsArtifactOverrideParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters">DevopsBuildRunBuildOutputsArtifactOverrideParameters</a>

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId">ArtifactRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType">ArtifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash">DeliveredArtifactHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId">DeliveredArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName">OutputArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems">DevopsBuildRunBuildOutputsDeliveredArtifactsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactRepositoryId`<sup>Required</sup> <a name="ArtifactRepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId"></a>

```csharp
public string ArtifactRepositoryId { get; }
```

- *Type:* string

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType"></a>

```csharp
public string ArtifactType { get; }
```

- *Type:* string

---

##### `DeliveredArtifactHash`<sup>Required</sup> <a name="DeliveredArtifactHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash"></a>

```csharp
public string DeliveredArtifactHash { get; }
```

- *Type:* string

---

##### `DeliveredArtifactId`<sup>Required</sup> <a name="DeliveredArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId"></a>

```csharp
public string DeliveredArtifactId { get; }
```

- *Type:* string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `OutputArtifactName`<sup>Required</sup> <a name="OutputArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName"></a>

```csharp
public string OutputArtifactName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsDeliveredArtifactsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems">DevopsBuildRunBuildOutputsDeliveredArtifactsItems</a>

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsList <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts">DevopsBuildRunBuildOutputsDeliveredArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items"></a>

```csharp
public DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsDeliveredArtifacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts">DevopsBuildRunBuildOutputsDeliveredArtifacts</a>

---


### DevopsBuildRunBuildOutputsExportedVariablesItemsList <a name="DevopsBuildRunBuildOutputsExportedVariablesItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariablesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference <a name="DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems">DevopsBuildRunBuildOutputsExportedVariablesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsExportedVariablesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems">DevopsBuildRunBuildOutputsExportedVariablesItems</a>

---


### DevopsBuildRunBuildOutputsExportedVariablesList <a name="DevopsBuildRunBuildOutputsExportedVariablesList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsExportedVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsExportedVariablesOutputReference <a name="DevopsBuildRunBuildOutputsExportedVariablesOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsExportedVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList">DevopsBuildRunBuildOutputsExportedVariablesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables">DevopsBuildRunBuildOutputsExportedVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items"></a>

```csharp
public DevopsBuildRunBuildOutputsExportedVariablesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList">DevopsBuildRunBuildOutputsExportedVariablesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsExportedVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables">DevopsBuildRunBuildOutputsExportedVariables</a>

---


### DevopsBuildRunBuildOutputsList <a name="DevopsBuildRunBuildOutputsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsOutputReference <a name="DevopsBuildRunBuildOutputsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters">ArtifactOverrideParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList">DevopsBuildRunBuildOutputsArtifactOverrideParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts">DeliveredArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList">DevopsBuildRunBuildOutputsDeliveredArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.exportedVariables">ExportedVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList">DevopsBuildRunBuildOutputsExportedVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection">VulnerabilityAuditSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs">DevopsBuildRunBuildOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactOverrideParameters`<sup>Required</sup> <a name="ArtifactOverrideParameters" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters"></a>

```csharp
public DevopsBuildRunBuildOutputsArtifactOverrideParametersList ArtifactOverrideParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList">DevopsBuildRunBuildOutputsArtifactOverrideParametersList</a>

---

##### `DeliveredArtifacts`<sup>Required</sup> <a name="DeliveredArtifacts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts"></a>

```csharp
public DevopsBuildRunBuildOutputsDeliveredArtifactsList DeliveredArtifacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList">DevopsBuildRunBuildOutputsDeliveredArtifactsList</a>

---

##### `ExportedVariables`<sup>Required</sup> <a name="ExportedVariables" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.exportedVariables"></a>

```csharp
public DevopsBuildRunBuildOutputsExportedVariablesList ExportedVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList">DevopsBuildRunBuildOutputsExportedVariablesList</a>

---

##### `VulnerabilityAuditSummaryCollection`<sup>Required</sup> <a name="VulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection"></a>

```csharp
public DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList VulnerabilityAuditSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs">DevopsBuildRunBuildOutputs</a>

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId">BuildStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash">CommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId">VulnerabilityAuditId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildStageId`<sup>Required</sup> <a name="BuildStageId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId"></a>

```csharp
public string BuildStageId { get; }
```

- *Type:* string

---

##### `CommitHash`<sup>Required</sup> <a name="CommitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash"></a>

```csharp
public string CommitHash { get; }
```

- *Type:* string

---

##### `VulnerabilityAuditId`<sup>Required</sup> <a name="VulnerabilityAuditId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId"></a>

```csharp
public string VulnerabilityAuditId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a>

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get"></a>

```csharp
private DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items"></a>

```csharp
public DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a>

---


### DevopsBuildRunBuildRunArgumentsItemsList <a name="DevopsBuildRunBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunArgumentsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get"></a>

```csharp
private DevopsBuildRunBuildRunArgumentsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsBuildRunBuildRunArgumentsItemsOutputReference <a name="DevopsBuildRunBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunArgumentsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsBuildRunBuildRunArgumentsOutputReference <a name="DevopsBuildRunBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList">DevopsBuildRunBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.items"></a>

```csharp
public DevopsBuildRunBuildRunArgumentsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList">DevopsBuildRunBuildRunArgumentsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunArguments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---


### DevopsBuildRunBuildRunProgressList <a name="DevopsBuildRunBuildRunProgressList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunProgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get"></a>

```csharp
private DevopsBuildRunBuildRunProgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunProgressOutputReference <a name="DevopsBuildRunBuildRunProgressOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress">BuildPipelineStageRunProgress</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress">DevopsBuildRunBuildRunProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildPipelineStageRunProgress`<sup>Required</sup> <a name="BuildPipelineStageRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress"></a>

```csharp
public StringMap BuildPipelineStageRunProgress { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunProgress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress">DevopsBuildRunBuildRunProgress</a>

---


### DevopsBuildRunBuildRunSourceList <a name="DevopsBuildRunBuildRunSourceList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceOutputReference <a name="DevopsBuildRunBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerId">TriggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo">TriggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList">DevopsBuildRunBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource">DevopsBuildRunBuildRunSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerId"></a>

```csharp
public string TriggerId { get; }
```

- *Type:* string

---

##### `TriggerInfo`<sup>Required</sup> <a name="TriggerInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoList TriggerInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList">DevopsBuildRunBuildRunSourceTriggerInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource">DevopsBuildRunBuildRunSource</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths">FilePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePaths`<sup>Required</sup> <a name="FilePaths" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths"></a>

```csharp
public string[] FilePaths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter">FileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileFilter`<sup>Required</sup> <a name="FileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList FileFilter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths">FilePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePaths`<sup>Required</sup> <a name="FilePaths" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths"></a>

```csharp
public string[] FilePaths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">BaseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter">FileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">HeadRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```csharp
public string BaseRef { get; }
```

- *Type:* string

---

##### `FileFilter`<sup>Required</sup> <a name="FileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList FileFilter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a>

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```csharp
public string HeadRef { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude">Exclude</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">Include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList Exclude { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList Include { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions">DevopsBuildRunBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions">DevopsBuildRunBuildRunSourceTriggerInfoActions</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoList <a name="DevopsBuildRunBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get"></a>

```csharp
private DevopsBuildRunBuildRunSourceTriggerInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunBuildRunSourceTriggerInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList">DevopsBuildRunBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo">DevopsBuildRunBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfoActionsList Actions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList">DevopsBuildRunBuildRunSourceTriggerInfoActionsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunBuildRunSourceTriggerInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo">DevopsBuildRunBuildRunSourceTriggerInfo</a>

---


### DevopsBuildRunCommitInfoOutputReference <a name="DevopsBuildRunCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunCommitInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHashInput">CommitHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranchInput">RepositoryBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHash">CommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranch">RepositoryBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitHashInput`<sup>Optional</sup> <a name="CommitHashInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHashInput"></a>

```csharp
public string CommitHashInput { get; }
```

- *Type:* string

---

##### `RepositoryBranchInput`<sup>Optional</sup> <a name="RepositoryBranchInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranchInput"></a>

```csharp
public string RepositoryBranchInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `CommitHash`<sup>Required</sup> <a name="CommitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHash"></a>

```csharp
public string CommitHash { get; }
```

- *Type:* string

---

##### `RepositoryBranch`<sup>Required</sup> <a name="RepositoryBranch" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranch"></a>

```csharp
public string RepositoryBranch { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.internalValue"></a>

```csharp
public DevopsBuildRunCommitInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---


### DevopsBuildRunTimeoutsOutputReference <a name="DevopsBuildRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsBuildRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



