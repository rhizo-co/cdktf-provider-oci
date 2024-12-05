# `cloudGuardTarget` Submodule <a name="`cloudGuardTarget` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardTarget <a name="CloudGuardTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target oci_cloud_guard_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTarget(Construct Scope, string Id, CloudGuardTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig">CloudGuardTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig">CloudGuardTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes">PutTargetDetectorRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes">PutTargetResponderRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetDetectorRecipes">ResetTargetDetectorRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetResponderRecipes">ResetTargetResponderRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetDetectorRecipes` <a name="PutTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes"></a>

```csharp
private void PutTargetDetectorRecipes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes.parameter.value"></a>

- *Type:* object

---

##### `PutTargetResponderRecipes` <a name="PutTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes"></a>

```csharp
private void PutTargetResponderRecipes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudGuardTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetDetectorRecipes` <a name="ResetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetDetectorRecipes"></a>

```csharp
private void ResetTargetDetectorRecipes()
```

##### `ResetTargetResponderRecipes` <a name="ResetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetResponderRecipes"></a>

```csharp
private void ResetTargetResponderRecipes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudGuardTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudGuardTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudGuardTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudGuardTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudGuardTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGuardTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGuardTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.inheritedByCompartments">InheritedByCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.recipeCount">RecipeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetails">TargetDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList">CloudGuardTargetTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipes">TargetDetectorRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList">CloudGuardTargetTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipes">TargetResponderRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList">CloudGuardTargetTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference">CloudGuardTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipesInput">TargetDetectorRecipesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipesInput">TargetResponderRecipesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InheritedByCompartments`<sup>Required</sup> <a name="InheritedByCompartments" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.inheritedByCompartments"></a>

```csharp
public string[] InheritedByCompartments { get; }
```

- *Type:* string[]

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `RecipeCount`<sup>Required</sup> <a name="RecipeCount" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.recipeCount"></a>

```csharp
public double RecipeCount { get; }
```

- *Type:* double

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetDetails`<sup>Required</sup> <a name="TargetDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetails"></a>

```csharp
public CloudGuardTargetTargetDetailsList TargetDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList">CloudGuardTargetTargetDetailsList</a>

---

##### `TargetDetectorRecipes`<sup>Required</sup> <a name="TargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipes"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesList TargetDetectorRecipes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList">CloudGuardTargetTargetDetectorRecipesList</a>

---

##### `TargetResponderRecipes`<sup>Required</sup> <a name="TargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipes"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesList TargetResponderRecipes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList">CloudGuardTargetTargetResponderRecipesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeouts"></a>

```csharp
public CloudGuardTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference">CloudGuardTargetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetDetectorRecipesInput`<sup>Optional</sup> <a name="TargetDetectorRecipesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipesInput"></a>

```csharp
public object TargetDetectorRecipesInput { get; }
```

- *Type:* object

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceTypeInput"></a>

```csharp
public string TargetResourceTypeInput { get; }
```

- *Type:* string

---

##### `TargetResponderRecipesInput`<sup>Optional</sup> <a name="TargetResponderRecipesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipesInput"></a>

```csharp
public object TargetResponderRecipesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardTargetConfig <a name="CloudGuardTargetConfig" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string TargetResourceId,
    string TargetResourceType,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string State = null,
    object TargetDetectorRecipes = null,
    object TargetResponderRecipes = null,
    CloudGuardTargetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetDetectorRecipes">TargetDetectorRecipes</a></code> | <code>object</code> | target_detector_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResponderRecipes">TargetResponderRecipes</a></code> | <code>object</code> | target_responder_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}.

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}.

---

##### `TargetDetectorRecipes`<sup>Optional</sup> <a name="TargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetDetectorRecipes"></a>

```csharp
public object TargetDetectorRecipes { get; set; }
```

- *Type:* object

target_detector_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_detector_recipes CloudGuardTarget#target_detector_recipes}

---

##### `TargetResponderRecipes`<sup>Optional</sup> <a name="TargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResponderRecipes"></a>

```csharp
public object TargetResponderRecipes { get; set; }
```

- *Type:* object

target_responder_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_responder_recipes CloudGuardTarget#target_responder_recipes}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.timeouts"></a>

```csharp
public CloudGuardTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#timeouts CloudGuardTarget#timeouts}

---

### CloudGuardTargetTargetDetails <a name="CloudGuardTargetTargetDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetails {

};
```


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes {

};
```


### CloudGuardTargetTargetDetectorRecipes <a name="CloudGuardTargetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipes {
    string DetectorRecipeId,
    object DetectorRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_recipe_id CloudGuardTarget#detector_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRules">DetectorRules</a></code> | <code>object</code> | detector_rules block. |

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRecipeId"></a>

```csharp
public string DetectorRecipeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_recipe_id CloudGuardTarget#detector_recipe_id}.

---

##### `DetectorRules`<sup>Optional</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRules"></a>

```csharp
public object DetectorRules { get; set; }
```

- *Type:* object

detector_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rules CloudGuardTarget#detector_rules}

---

### CloudGuardTargetTargetDetectorRecipesDetectorRules <a name="CloudGuardTargetTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRules {
    CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails Details,
    string DetectorRuleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.detectorRuleId">DetectorRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rule_id CloudGuardTarget#detector_rule_id}. |

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.details"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails Details { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.detectorRuleId"></a>

```csharp
public string DetectorRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rule_id CloudGuardTarget#detector_rule_id}.

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails {
    object ConditionGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.property.conditionGroups">ConditionGroups</a></code> | <code>object</code> | condition_groups block. |

---

##### `ConditionGroups`<sup>Optional</sup> <a name="ConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.property.conditionGroups"></a>

```csharp
public object ConditionGroups { get; set; }
```

- *Type:* object

condition_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition_groups CloudGuardTarget#condition_groups}

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups {
    string CompartmentId,
    string Condition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}.

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}.

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations {

};
```


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues {

};
```


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues {

};
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings {

};
```


### CloudGuardTargetTargetResponderRecipes <a name="CloudGuardTargetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipes {
    string ResponderRecipeId,
    object ResponderRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRecipeId">ResponderRecipeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_recipe_id CloudGuardTarget#responder_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRules">ResponderRules</a></code> | <code>object</code> | responder_rules block. |

---

##### `ResponderRecipeId`<sup>Required</sup> <a name="ResponderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRecipeId"></a>

```csharp
public string ResponderRecipeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_recipe_id CloudGuardTarget#responder_recipe_id}.

---

##### `ResponderRules`<sup>Optional</sup> <a name="ResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRules"></a>

```csharp
public object ResponderRules { get; set; }
```

- *Type:* object

responder_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rules CloudGuardTarget#responder_rules}

---

### CloudGuardTargetTargetResponderRecipesEffectiveResponderRules <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRules {

};
```


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails {

};
```


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations {

};
```


### CloudGuardTargetTargetResponderRecipesResponderRules <a name="CloudGuardTargetTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRules {
    CloudGuardTargetTargetResponderRecipesResponderRulesDetails Details,
    string ResponderRuleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.responderRuleId">ResponderRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rule_id CloudGuardTarget#responder_rule_id}. |

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.details"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails Details { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}

---

##### `ResponderRuleId`<sup>Required</sup> <a name="ResponderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.responderRuleId"></a>

```csharp
public string ResponderRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rule_id CloudGuardTarget#responder_rule_id}.

---

### CloudGuardTargetTargetResponderRecipesResponderRulesDetails <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetails {
    string Condition = null,
    object Configurations = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.configurations">Configurations</a></code> | <code>object</code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#mode CloudGuardTarget#mode}. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.configurations"></a>

```csharp
public object Configurations { get; set; }
```

- *Type:* object

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#configurations CloudGuardTarget#configurations}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#mode CloudGuardTarget#mode}.

---

### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations {
    string ConfigKey,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.configKey">ConfigKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#config_key CloudGuardTarget#config_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#name CloudGuardTarget#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#value CloudGuardTarget#value}. |

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.configKey"></a>

```csharp
public string ConfigKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#config_key CloudGuardTarget#config_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#name CloudGuardTarget#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#value CloudGuardTarget#value}.

---

### CloudGuardTargetTimeouts <a name="CloudGuardTargetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#create CloudGuardTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#delete CloudGuardTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#update CloudGuardTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#create CloudGuardTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#delete CloudGuardTarget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#update CloudGuardTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardTargetTargetDetailsList <a name="CloudGuardTargetTargetDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get"></a>

```csharp
private CloudGuardTargetTargetDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetailsOutputReference <a name="CloudGuardTargetTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName">SecurityZoneDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneId">SecurityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes">TargetSecurityZoneRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails">CloudGuardTargetTargetDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityZoneDisplayName`<sup>Required</sup> <a name="SecurityZoneDisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```csharp
public string SecurityZoneDisplayName { get; }
```

- *Type:* string

---

##### `SecurityZoneId`<sup>Required</sup> <a name="SecurityZoneId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneId"></a>

```csharp
public string SecurityZoneId { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `TargetSecurityZoneRecipes`<sup>Required</sup> <a name="TargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```csharp
public CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList TargetSecurityZoneRecipes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails">CloudGuardTargetTargetDetails</a>

---


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```csharp
private CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">SecurityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SecurityPolicies`<sup>Required</sup> <a name="SecurityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```csharp
public string[] SecurityPolicies { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```csharp
public string ListType { get; }
```

- *Type:* string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```csharp
public string ManagedListType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups">PutConditionGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resetConditionGroups">ResetConditionGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionGroups` <a name="PutConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups"></a>

```csharp
private void PutConditionGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups.parameter.value"></a>

- *Type:* object

---

##### `ResetConditionGroups` <a name="ResetConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resetConditionGroups"></a>

```csharp
private void ResetConditionGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">ConditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroupsInput">ConditionGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionGroups`<sup>Required</sup> <a name="ConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList ConditionGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```csharp
public IResolvable IsConfigurationAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `ConditionGroupsInput`<sup>Optional</sup> <a name="ConditionGroupsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroupsInput"></a>

```csharp
public object ConditionGroupsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails">PutDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDetails` <a name="PutDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails"></a>

```csharp
private void PutDetails(CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detailsInput">DetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleIdInput">DetectorRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```csharp
public string[] ManagedListTypes { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detailsInput"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails DetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---

##### `DetectorRuleIdInput`<sup>Optional</sup> <a name="DetectorRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleIdInput"></a>

```csharp
public string DetectorRuleIdInput { get; }
```

- *Type:* string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```csharp
public string DetectorRuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```csharp
public string ListType { get; }
```

- *Type:* string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```csharp
public string ManagedListType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">ConditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionGroups`<sup>Required</sup> <a name="ConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList ConditionGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```csharp
public IResolvable IsConfigurationAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```csharp
public string DetectorRuleId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```csharp
public string[] ManagedListTypes { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a>

---


### CloudGuardTargetTargetDetectorRecipesList <a name="CloudGuardTargetTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get"></a>

```csharp
private CloudGuardTargetTargetDetectorRecipesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetDetectorRecipesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetDetectorRecipesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules">PutDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resetDetectorRules">ResetDetectorRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDetectorRules` <a name="PutDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules"></a>

```csharp
private void PutDetectorRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules.parameter.value"></a>

- *Type:* object

---

##### `ResetDetectorRules` <a name="ResetDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resetDetectorRules"></a>

```csharp
private void ResetDetectorRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeIdInput">DetectorRecipeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRulesInput">DetectorRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```csharp
public string DetectorRecipeType { get; }
```

- *Type:* string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesDetectorRulesList DetectorRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```csharp
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList EffectiveDetectorRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DetectorRecipeIdInput`<sup>Optional</sup> <a name="DetectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeIdInput"></a>

```csharp
public string DetectorRecipeIdInput { get; }
```

- *Type:* string

---

##### `DetectorRulesInput`<sup>Optional</sup> <a name="DetectorRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRulesInput"></a>

```csharp
public object DetectorRulesInput { get; }
```

- *Type:* object

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```csharp
public string DetectorRecipeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">ResponderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">SupportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules">CloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `ResponderRuleId`<sup>Required</sup> <a name="ResponderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```csharp
public string ResponderRuleId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedModes`<sup>Required</sup> <a name="SupportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```csharp
public string[] SupportedModes { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules">CloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a>

---


### CloudGuardTargetTargetResponderRecipesList <a name="CloudGuardTargetTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesOutputReference <a name="CloudGuardTargetTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules">PutResponderRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resetResponderRules">ResetResponderRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponderRules` <a name="PutResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules"></a>

```csharp
private void PutResponderRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules.parameter.value"></a>

- *Type:* object

---

##### `ResetResponderRules` <a name="ResetResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resetResponderRules"></a>

```csharp
private void ResetResponderRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules">EffectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules">ResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList">CloudGuardTargetTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeIdInput">ResponderRecipeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRulesInput">ResponderRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId">ResponderRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveResponderRules`<sup>Required</sup> <a name="EffectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList EffectiveResponderRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ResponderRules`<sup>Required</sup> <a name="ResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesList ResponderRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList">CloudGuardTargetTargetResponderRecipesResponderRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ResponderRecipeIdInput`<sup>Optional</sup> <a name="ResponderRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeIdInput"></a>

```csharp
public string ResponderRecipeIdInput { get; }
```

- *Type:* string

---

##### `ResponderRulesInput`<sup>Optional</sup> <a name="ResponderRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRulesInput"></a>

```csharp
public object ResponderRulesInput { get; }
```

- *Type:* object

---

##### `ResponderRecipeId`<sup>Required</sup> <a name="ResponderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```csharp
public string ResponderRecipeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKeyInput">ConfigKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKeyInput`<sup>Optional</sup> <a name="ConfigKeyInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKeyInput"></a>

```csharp
public string ConfigKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations"></a>

```csharp
private void PutConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetConfigurations"></a>

```csharp
private void ResetConfigurations()
```

##### `ResetMode` <a name="ResetMode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurationsInput"></a>

```csharp
public object ConfigurationsInput { get; }
```

- *Type:* object

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesList <a name="CloudGuardTargetTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get"></a>

```csharp
private CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails">PutDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDetails` <a name="PutDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails"></a>

```csharp
private void PutDetails(CloudGuardTargetTargetResponderRecipesResponderRulesDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">SupportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.detailsInput">DetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleIdInput">ResponderRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">ResponderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedModes`<sup>Required</sup> <a name="SupportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```csharp
public string[] SupportedModes { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.detailsInput"></a>

```csharp
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails DetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---

##### `ResponderRuleIdInput`<sup>Optional</sup> <a name="ResponderRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleIdInput"></a>

```csharp
public string ResponderRuleIdInput { get; }
```

- *Type:* string

---

##### `ResponderRuleId`<sup>Required</sup> <a name="ResponderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```csharp
public string ResponderRuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudGuardTargetTimeoutsOutputReference <a name="CloudGuardTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudGuardTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



