# `generativeAiModel` Submodule <a name="`generativeAiModel` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiModel <a name="GenerativeAiModel" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model oci_generative_ai_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModel(Construct Scope, string Id, GenerativeAiModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails">PutFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor">ResetVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFineTuneDetails` <a name="PutFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails"></a>

```csharp
private void PutFineTuneDetails(GenerativeAiModelFineTuneDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts"></a>

```csharp
private void PutTimeouts(GenerativeAiModelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVendor` <a name="ResetVendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor"></a>

```csharp
private void ResetVendor()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenerativeAiModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenerativeAiModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenerativeAiModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenerativeAiModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenerativeAiModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenerativeAiModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails">FineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported">IsLongTermSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics">ModelMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated">TimeDeprecated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput">BaseModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput">FineTuneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput">VendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId">BaseModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor">Vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `FineTuneDetails`<sup>Required</sup> <a name="FineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails"></a>

```csharp
public GenerativeAiModelFineTuneDetailsOutputReference FineTuneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a>

---

##### `IsLongTermSupported`<sup>Required</sup> <a name="IsLongTermSupported" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported"></a>

```csharp
public IResolvable IsLongTermSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ModelMetrics`<sup>Required</sup> <a name="ModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics"></a>

```csharp
public GenerativeAiModelModelMetricsList ModelMetrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDeprecated`<sup>Required</sup> <a name="TimeDeprecated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated"></a>

```csharp
public string TimeDeprecated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts"></a>

```csharp
public GenerativeAiModelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `BaseModelIdInput`<sup>Optional</sup> <a name="BaseModelIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput"></a>

```csharp
public string BaseModelIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FineTuneDetailsInput`<sup>Optional</sup> <a name="FineTuneDetailsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput"></a>

```csharp
public GenerativeAiModelFineTuneDetails FineTuneDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput"></a>

```csharp
public string VendorInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `BaseModelId`<sup>Required</sup> <a name="BaseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId"></a>

```csharp
public string BaseModelId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor"></a>

```csharp
public string Vendor { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiModelConfig <a name="GenerativeAiModelConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseModelId,
    string CompartmentId,
    GenerativeAiModelFineTuneDetails FineTuneDetails,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    GenerativeAiModelTimeouts Timeouts = null,
    string Vendor = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId">BaseModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails">FineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | fine_tune_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor">Vendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseModelId`<sup>Required</sup> <a name="BaseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId"></a>

```csharp
public string BaseModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}.

---

##### `FineTuneDetails`<sup>Required</sup> <a name="FineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails"></a>

```csharp
public GenerativeAiModelFineTuneDetails FineTuneDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

fine_tune_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts"></a>

```csharp
public GenerativeAiModelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}

---

##### `Vendor`<sup>Optional</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor"></a>

```csharp
public string Vendor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}.

---

### GenerativeAiModelFineTuneDetails <a name="GenerativeAiModelFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetails {
    string DedicatedAiClusterId,
    GenerativeAiModelFineTuneDetailsTrainingDataset TrainingDataset,
    GenerativeAiModelFineTuneDetailsTrainingConfig TrainingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId">DedicatedAiClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig">TrainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | training_config block. |

---

##### `DedicatedAiClusterId`<sup>Required</sup> <a name="DedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId"></a>

```csharp
public string DedicatedAiClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}.

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingDataset TrainingDataset { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}

---

##### `TrainingConfig`<sup>Optional</sup> <a name="TrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingConfig TrainingConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

training_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}

---

### GenerativeAiModelFineTuneDetailsTrainingConfig <a name="GenerativeAiModelFineTuneDetailsTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetailsTrainingConfig {
    string TrainingConfigType,
    double EarlyStoppingPatience = null,
    double EarlyStoppingThreshold = null,
    double LearningRate = null,
    double LogModelMetricsIntervalInSteps = null,
    double LoraAlpha = null,
    double LoraDropout = null,
    double LoraR = null,
    double NumOfLastLayers = null,
    double TotalTrainingEpochs = null,
    double TrainingBatchSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType">TrainingConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience">EarlyStoppingPatience</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold">EarlyStoppingThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate">LearningRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps">LogModelMetricsIntervalInSteps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha">LoraAlpha</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout">LoraDropout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR">LoraR</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers">NumOfLastLayers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs">TotalTrainingEpochs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize">TrainingBatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}. |

---

##### `TrainingConfigType`<sup>Required</sup> <a name="TrainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType"></a>

```csharp
public string TrainingConfigType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}.

---

##### `EarlyStoppingPatience`<sup>Optional</sup> <a name="EarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience"></a>

```csharp
public double EarlyStoppingPatience { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}.

---

##### `EarlyStoppingThreshold`<sup>Optional</sup> <a name="EarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold"></a>

```csharp
public double EarlyStoppingThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}.

---

##### `LearningRate`<sup>Optional</sup> <a name="LearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate"></a>

```csharp
public double LearningRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}.

---

##### `LogModelMetricsIntervalInSteps`<sup>Optional</sup> <a name="LogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps"></a>

```csharp
public double LogModelMetricsIntervalInSteps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}.

---

##### `LoraAlpha`<sup>Optional</sup> <a name="LoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha"></a>

```csharp
public double LoraAlpha { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}.

---

##### `LoraDropout`<sup>Optional</sup> <a name="LoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout"></a>

```csharp
public double LoraDropout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}.

---

##### `LoraR`<sup>Optional</sup> <a name="LoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR"></a>

```csharp
public double LoraR { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}.

---

##### `NumOfLastLayers`<sup>Optional</sup> <a name="NumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers"></a>

```csharp
public double NumOfLastLayers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}.

---

##### `TotalTrainingEpochs`<sup>Optional</sup> <a name="TotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs"></a>

```csharp
public double TotalTrainingEpochs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}.

---

##### `TrainingBatchSize`<sup>Optional</sup> <a name="TrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize"></a>

```csharp
public double TrainingBatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}.

---

### GenerativeAiModelFineTuneDetailsTrainingDataset <a name="GenerativeAiModelFineTuneDetailsTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetailsTrainingDataset {
    string Bucket,
    string DatasetType,
    string Namespace,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType">DatasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}.

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType"></a>

```csharp
public string DatasetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}.

---

### GenerativeAiModelModelMetrics <a name="GenerativeAiModelModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelModelMetrics {

};
```


### GenerativeAiModelTimeouts <a name="GenerativeAiModelTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiModelFineTuneDetailsOutputReference <a name="GenerativeAiModelFineTuneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig">PutTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset">PutTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig">ResetTrainingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrainingConfig` <a name="PutTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig"></a>

```csharp
private void PutTrainingConfig(GenerativeAiModelFineTuneDetailsTrainingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `PutTrainingDataset` <a name="PutTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset"></a>

```csharp
private void PutTrainingDataset(GenerativeAiModelFineTuneDetailsTrainingDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `ResetTrainingConfig` <a name="ResetTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig"></a>

```csharp
private void ResetTrainingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig">TrainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput">DedicatedAiClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput">TrainingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput">TrainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId">DedicatedAiClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrainingConfig`<sup>Required</sup> <a name="TrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference TrainingConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a>

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference TrainingDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a>

---

##### `DedicatedAiClusterIdInput`<sup>Optional</sup> <a name="DedicatedAiClusterIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput"></a>

```csharp
public string DedicatedAiClusterIdInput { get; }
```

- *Type:* string

---

##### `TrainingConfigInput`<sup>Optional</sup> <a name="TrainingConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingConfig TrainingConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `TrainingDatasetInput`<sup>Optional</sup> <a name="TrainingDatasetInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingDataset TrainingDatasetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `DedicatedAiClusterId`<sup>Required</sup> <a name="DedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId"></a>

```csharp
public string DedicatedAiClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue"></a>

```csharp
public GenerativeAiModelFineTuneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---


### GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience">ResetEarlyStoppingPatience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold">ResetEarlyStoppingThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate">ResetLearningRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps">ResetLogModelMetricsIntervalInSteps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha">ResetLoraAlpha</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout">ResetLoraDropout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR">ResetLoraR</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers">ResetNumOfLastLayers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs">ResetTotalTrainingEpochs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize">ResetTrainingBatchSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEarlyStoppingPatience` <a name="ResetEarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience"></a>

```csharp
private void ResetEarlyStoppingPatience()
```

##### `ResetEarlyStoppingThreshold` <a name="ResetEarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold"></a>

```csharp
private void ResetEarlyStoppingThreshold()
```

##### `ResetLearningRate` <a name="ResetLearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate"></a>

```csharp
private void ResetLearningRate()
```

##### `ResetLogModelMetricsIntervalInSteps` <a name="ResetLogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps"></a>

```csharp
private void ResetLogModelMetricsIntervalInSteps()
```

##### `ResetLoraAlpha` <a name="ResetLoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha"></a>

```csharp
private void ResetLoraAlpha()
```

##### `ResetLoraDropout` <a name="ResetLoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout"></a>

```csharp
private void ResetLoraDropout()
```

##### `ResetLoraR` <a name="ResetLoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR"></a>

```csharp
private void ResetLoraR()
```

##### `ResetNumOfLastLayers` <a name="ResetNumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers"></a>

```csharp
private void ResetNumOfLastLayers()
```

##### `ResetTotalTrainingEpochs` <a name="ResetTotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs"></a>

```csharp
private void ResetTotalTrainingEpochs()
```

##### `ResetTrainingBatchSize` <a name="ResetTrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize"></a>

```csharp
private void ResetTrainingBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput">EarlyStoppingPatienceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput">EarlyStoppingThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput">LearningRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput">LogModelMetricsIntervalInStepsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput">LoraAlphaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput">LoraDropoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput">LoraRInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput">NumOfLastLayersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput">TotalTrainingEpochsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput">TrainingBatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput">TrainingConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience">EarlyStoppingPatience</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold">EarlyStoppingThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate">LearningRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps">LogModelMetricsIntervalInSteps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha">LoraAlpha</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout">LoraDropout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR">LoraR</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers">NumOfLastLayers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs">TotalTrainingEpochs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize">TrainingBatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType">TrainingConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EarlyStoppingPatienceInput`<sup>Optional</sup> <a name="EarlyStoppingPatienceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput"></a>

```csharp
public double EarlyStoppingPatienceInput { get; }
```

- *Type:* double

---

##### `EarlyStoppingThresholdInput`<sup>Optional</sup> <a name="EarlyStoppingThresholdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput"></a>

```csharp
public double EarlyStoppingThresholdInput { get; }
```

- *Type:* double

---

##### `LearningRateInput`<sup>Optional</sup> <a name="LearningRateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput"></a>

```csharp
public double LearningRateInput { get; }
```

- *Type:* double

---

##### `LogModelMetricsIntervalInStepsInput`<sup>Optional</sup> <a name="LogModelMetricsIntervalInStepsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput"></a>

```csharp
public double LogModelMetricsIntervalInStepsInput { get; }
```

- *Type:* double

---

##### `LoraAlphaInput`<sup>Optional</sup> <a name="LoraAlphaInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput"></a>

```csharp
public double LoraAlphaInput { get; }
```

- *Type:* double

---

##### `LoraDropoutInput`<sup>Optional</sup> <a name="LoraDropoutInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput"></a>

```csharp
public double LoraDropoutInput { get; }
```

- *Type:* double

---

##### `LoraRInput`<sup>Optional</sup> <a name="LoraRInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput"></a>

```csharp
public double LoraRInput { get; }
```

- *Type:* double

---

##### `NumOfLastLayersInput`<sup>Optional</sup> <a name="NumOfLastLayersInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput"></a>

```csharp
public double NumOfLastLayersInput { get; }
```

- *Type:* double

---

##### `TotalTrainingEpochsInput`<sup>Optional</sup> <a name="TotalTrainingEpochsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput"></a>

```csharp
public double TotalTrainingEpochsInput { get; }
```

- *Type:* double

---

##### `TrainingBatchSizeInput`<sup>Optional</sup> <a name="TrainingBatchSizeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput"></a>

```csharp
public double TrainingBatchSizeInput { get; }
```

- *Type:* double

---

##### `TrainingConfigTypeInput`<sup>Optional</sup> <a name="TrainingConfigTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput"></a>

```csharp
public string TrainingConfigTypeInput { get; }
```

- *Type:* string

---

##### `EarlyStoppingPatience`<sup>Required</sup> <a name="EarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience"></a>

```csharp
public double EarlyStoppingPatience { get; }
```

- *Type:* double

---

##### `EarlyStoppingThreshold`<sup>Required</sup> <a name="EarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold"></a>

```csharp
public double EarlyStoppingThreshold { get; }
```

- *Type:* double

---

##### `LearningRate`<sup>Required</sup> <a name="LearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate"></a>

```csharp
public double LearningRate { get; }
```

- *Type:* double

---

##### `LogModelMetricsIntervalInSteps`<sup>Required</sup> <a name="LogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps"></a>

```csharp
public double LogModelMetricsIntervalInSteps { get; }
```

- *Type:* double

---

##### `LoraAlpha`<sup>Required</sup> <a name="LoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha"></a>

```csharp
public double LoraAlpha { get; }
```

- *Type:* double

---

##### `LoraDropout`<sup>Required</sup> <a name="LoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout"></a>

```csharp
public double LoraDropout { get; }
```

- *Type:* double

---

##### `LoraR`<sup>Required</sup> <a name="LoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR"></a>

```csharp
public double LoraR { get; }
```

- *Type:* double

---

##### `NumOfLastLayers`<sup>Required</sup> <a name="NumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers"></a>

```csharp
public double NumOfLastLayers { get; }
```

- *Type:* double

---

##### `TotalTrainingEpochs`<sup>Required</sup> <a name="TotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs"></a>

```csharp
public double TotalTrainingEpochs { get; }
```

- *Type:* double

---

##### `TrainingBatchSize`<sup>Required</sup> <a name="TrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize"></a>

```csharp
public double TrainingBatchSize { get; }
```

- *Type:* double

---

##### `TrainingConfigType`<sup>Required</sup> <a name="TrainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType"></a>

```csharp
public string TrainingConfigType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---


### GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```csharp
public string DatasetTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue"></a>

```csharp
public GenerativeAiModelFineTuneDetailsTrainingDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---


### GenerativeAiModelModelMetricsList <a name="GenerativeAiModelModelMetricsList" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelModelMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get"></a>

```csharp
private GenerativeAiModelModelMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GenerativeAiModelModelMetricsOutputReference <a name="GenerativeAiModelModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelModelMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy">FinalAccuracy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss">FinalLoss</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType">ModelMetricsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FinalAccuracy`<sup>Required</sup> <a name="FinalAccuracy" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy"></a>

```csharp
public double FinalAccuracy { get; }
```

- *Type:* double

---

##### `FinalLoss`<sup>Required</sup> <a name="FinalLoss" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss"></a>

```csharp
public double FinalLoss { get; }
```

- *Type:* double

---

##### `ModelMetricsType`<sup>Required</sup> <a name="ModelMetricsType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType"></a>

```csharp
public string ModelMetricsType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue"></a>

```csharp
public GenerativeAiModelModelMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a>

---


### GenerativeAiModelTimeoutsOutputReference <a name="GenerativeAiModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenerativeAiModelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



