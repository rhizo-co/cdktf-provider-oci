# `devopsDeployPipeline` Submodule <a name="`devopsDeployPipeline` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployPipeline <a name="DevopsDeployPipeline" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline oci_devops_deploy_pipeline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipeline(Construct Scope, string Id, DevopsDeployPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig">DevopsDeployPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig">DevopsDeployPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putDeployPipelineParameters">PutDeployPipelineParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDeployPipelineParameters">ResetDeployPipelineParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployPipelineParameters` <a name="PutDeployPipelineParameters" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putDeployPipelineParameters"></a>

```csharp
private void PutDeployPipelineParameters(DevopsDeployPipelineDeployPipelineParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putDeployPipelineParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsDeployPipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts">DevopsDeployPipelineTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeployPipelineParameters` <a name="ResetDeployPipelineParameters" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDeployPipelineParameters"></a>

```csharp
private void ResetDeployPipelineParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsDeployPipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsDeployPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsDeployPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineArtifacts">DeployPipelineArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList">DevopsDeployPipelineDeployPipelineArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineEnvironments">DeployPipelineEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList">DevopsDeployPipelineDeployPipelineEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineParameters">DeployPipelineParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference">DevopsDeployPipelineDeployPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference">DevopsDeployPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineParametersInput">DeployPipelineParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DeployPipelineArtifacts`<sup>Required</sup> <a name="DeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineArtifacts"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsList DeployPipelineArtifacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList">DevopsDeployPipelineDeployPipelineArtifactsList</a>

---

##### `DeployPipelineEnvironments`<sup>Required</sup> <a name="DeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineEnvironments"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsList DeployPipelineEnvironments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList">DevopsDeployPipelineDeployPipelineEnvironmentsList</a>

---

##### `DeployPipelineParameters`<sup>Required</sup> <a name="DeployPipelineParameters" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineParameters"></a>

```csharp
public DevopsDeployPipelineDeployPipelineParametersOutputReference DeployPipelineParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference">DevopsDeployPipelineDeployPipelineParametersOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeouts"></a>

```csharp
public DevopsDeployPipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference">DevopsDeployPipelineTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployPipelineParametersInput`<sup>Optional</sup> <a name="DeployPipelineParametersInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.deployPipelineParametersInput"></a>

```csharp
public DevopsDeployPipelineDeployPipelineParameters DeployPipelineParametersInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployPipelineConfig <a name="DevopsDeployPipelineConfig" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    DevopsDeployPipelineDeployPipelineParameters DeployPipelineParameters = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DevopsDeployPipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#project_id DevopsDeployPipeline#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#defined_tags DevopsDeployPipeline#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.deployPipelineParameters">DeployPipelineParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a></code> | deploy_pipeline_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#description DevopsDeployPipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#display_name DevopsDeployPipeline#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#freeform_tags DevopsDeployPipeline#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#id DevopsDeployPipeline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts">DevopsDeployPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#project_id DevopsDeployPipeline#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#defined_tags DevopsDeployPipeline#defined_tags}.

---

##### `DeployPipelineParameters`<sup>Optional</sup> <a name="DeployPipelineParameters" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.deployPipelineParameters"></a>

```csharp
public DevopsDeployPipelineDeployPipelineParameters DeployPipelineParameters { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a>

deploy_pipeline_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#deploy_pipeline_parameters DevopsDeployPipeline#deploy_pipeline_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#description DevopsDeployPipeline#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#display_name DevopsDeployPipeline#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#freeform_tags DevopsDeployPipeline#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#id DevopsDeployPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineConfig.property.timeouts"></a>

```csharp
public DevopsDeployPipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts">DevopsDeployPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#timeouts DevopsDeployPipeline#timeouts}

---

### DevopsDeployPipelineDeployPipelineArtifacts <a name="DevopsDeployPipelineDeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifacts {

};
```


### DevopsDeployPipelineDeployPipelineArtifactsItems <a name="DevopsDeployPipelineDeployPipelineArtifactsItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItems {

};
```


### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages {

};
```


### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems {

};
```


### DevopsDeployPipelineDeployPipelineEnvironments <a name="DevopsDeployPipelineDeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironments {

};
```


### DevopsDeployPipelineDeployPipelineEnvironmentsItems <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItems {

};
```


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages {

};
```


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems {

};
```


### DevopsDeployPipelineDeployPipelineParameters <a name="DevopsDeployPipelineDeployPipelineParameters" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineParameters {
    object Items
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#items DevopsDeployPipeline#items}

---

### DevopsDeployPipelineDeployPipelineParametersItems <a name="DevopsDeployPipelineDeployPipelineParametersItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineParametersItems {
    string Name,
    string DefaultValue = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#name DevopsDeployPipeline#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#default_value DevopsDeployPipeline#default_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#description DevopsDeployPipeline#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#name DevopsDeployPipeline#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#default_value DevopsDeployPipeline#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItems.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#description DevopsDeployPipeline#description}.

---

### DevopsDeployPipelineTimeouts <a name="DevopsDeployPipelineTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#create DevopsDeployPipeline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#delete DevopsDeployPipeline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#update DevopsDeployPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#create DevopsDeployPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#delete DevopsDeployPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_pipeline#update DevopsDeployPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">DeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```csharp
public string DeployStageId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems</a>

---


### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages</a>

---


### DevopsDeployPipelineDeployPipelineArtifactsItemsList <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference <a name="DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages">DeployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItems">DevopsDeployPipelineDeployPipelineArtifactsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; }
```

- *Type:* string

---

##### `DeployPipelineStages`<sup>Required</sup> <a name="DeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList DeployPipelineStages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList">DevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItems">DevopsDeployPipelineDeployPipelineArtifactsItems</a>

---


### DevopsDeployPipelineDeployPipelineArtifactsList <a name="DevopsDeployPipelineDeployPipelineArtifactsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineArtifactsOutputReference <a name="DevopsDeployPipelineDeployPipelineArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList">DevopsDeployPipelineDeployPipelineArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifacts">DevopsDeployPipelineDeployPipelineArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.items"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifactsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsItemsList">DevopsDeployPipelineDeployPipelineArtifactsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineArtifacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineArtifacts">DevopsDeployPipelineDeployPipelineArtifacts</a>

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">DeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```csharp
public string DeployStageId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a>

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages</a>

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsList <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference <a name="DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId">DeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages">DeployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItems">DevopsDeployPipelineDeployPipelineEnvironmentsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployEnvironmentId`<sup>Required</sup> <a name="DeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId"></a>

```csharp
public string DeployEnvironmentId { get; }
```

- *Type:* string

---

##### `DeployPipelineStages`<sup>Required</sup> <a name="DeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList DeployPipelineStages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItems">DevopsDeployPipelineDeployPipelineEnvironmentsItems</a>

---


### DevopsDeployPipelineDeployPipelineEnvironmentsList <a name="DevopsDeployPipelineDeployPipelineEnvironmentsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference <a name="DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironments">DevopsDeployPipelineDeployPipelineEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.items"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironmentsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsItemsList">DevopsDeployPipelineDeployPipelineEnvironmentsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineEnvironments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineEnvironments">DevopsDeployPipelineDeployPipelineEnvironments</a>

---


### DevopsDeployPipelineDeployPipelineParametersItemsList <a name="DevopsDeployPipelineDeployPipelineParametersItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineParametersItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.get"></a>

```csharp
private DevopsDeployPipelineDeployPipelineParametersItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployPipelineDeployPipelineParametersItemsOutputReference <a name="DevopsDeployPipelineDeployPipelineParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineParametersItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployPipelineDeployPipelineParametersOutputReference <a name="DevopsDeployPipelineDeployPipelineParametersOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineDeployPipelineParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.putItems.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList">DevopsDeployPipelineDeployPipelineParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.items"></a>

```csharp
public DevopsDeployPipelineDeployPipelineParametersItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersItemsList">DevopsDeployPipelineDeployPipelineParametersItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParametersOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployPipelineDeployPipelineParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineDeployPipelineParameters">DevopsDeployPipelineDeployPipelineParameters</a>

---


### DevopsDeployPipelineTimeoutsOutputReference <a name="DevopsDeployPipelineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployPipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployPipeline.DevopsDeployPipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



