# `aiVisionModel` Submodule <a name="`aiVisionModel` Submodule" id="rhizo-co-terraform-provider-oci.aiVisionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiVisionModel <a name="AiVisionModel" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model oci_ai_vision_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModel(Construct Scope, string Id, AiVisionModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig">AiVisionModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig">AiVisionModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset">PutTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset">PutTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset">PutValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetIsQuickMode">ResetIsQuickMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetMaxTrainingDurationInHours">ResetMaxTrainingDurationInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetModelVersion">ResetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTestingDataset">ResetTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetValidationDataset">ResetValidationDataset</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTestingDataset` <a name="PutTestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset"></a>

```csharp
private void PutTestingDataset(AiVisionModelTestingDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts"></a>

```csharp
private void PutTimeouts(AiVisionModelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>

---

##### `PutTrainingDataset` <a name="PutTrainingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset"></a>

```csharp
private void PutTrainingDataset(AiVisionModelTrainingDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

---

##### `PutValidationDataset` <a name="PutValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset"></a>

```csharp
private void PutValidationDataset(AiVisionModelValidationDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsQuickMode` <a name="ResetIsQuickMode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetIsQuickMode"></a>

```csharp
private void ResetIsQuickMode()
```

##### `ResetMaxTrainingDurationInHours` <a name="ResetMaxTrainingDurationInHours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetMaxTrainingDurationInHours"></a>

```csharp
private void ResetMaxTrainingDurationInHours()
```

##### `ResetModelVersion` <a name="ResetModelVersion" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetModelVersion"></a>

```csharp
private void ResetModelVersion()
```

##### `ResetTestingDataset` <a name="ResetTestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTestingDataset"></a>

```csharp
private void ResetTestingDataset()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidationDataset` <a name="ResetValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetValidationDataset"></a>

```csharp
private void ResetValidationDataset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiVisionModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiVisionModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiVisionModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiVisionModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiVisionModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AiVisionModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiVisionModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiVisionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AiVisionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.averagePrecision">AveragePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.metrics">Metrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.precision">Precision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.recall">Recall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testImageCount">TestImageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDataset">TestingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference">AiVisionModelTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference">AiVisionModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.totalImageCount">TotalImageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainedDurationInHours">TrainedDurationInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference">AiVisionModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDataset">ValidationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference">AiVisionModelValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickModeInput">IsQuickModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHoursInput">MaxTrainingDurationInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelTypeInput">ModelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersionInput">ModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDatasetInput">TestingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDatasetInput">TrainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDatasetInput">ValidationDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickMode">IsQuickMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHours">MaxTrainingDurationInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersion">ModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AveragePrecision`<sup>Required</sup> <a name="AveragePrecision" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.averagePrecision"></a>

```csharp
public double AveragePrecision { get; }
```

- *Type:* double

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.confidenceThreshold"></a>

```csharp
public double ConfidenceThreshold { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.metrics"></a>

```csharp
public string Metrics { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.precision"></a>

```csharp
public double Precision { get; }
```

- *Type:* double

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.recall"></a>

```csharp
public double Recall { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TestImageCount`<sup>Required</sup> <a name="TestImageCount" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testImageCount"></a>

```csharp
public double TestImageCount { get; }
```

- *Type:* double

---

##### `TestingDataset`<sup>Required</sup> <a name="TestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDataset"></a>

```csharp
public AiVisionModelTestingDatasetOutputReference TestingDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference">AiVisionModelTestingDatasetOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeouts"></a>

```csharp
public AiVisionModelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference">AiVisionModelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalImageCount`<sup>Required</sup> <a name="TotalImageCount" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.totalImageCount"></a>

```csharp
public double TotalImageCount { get; }
```

- *Type:* double

---

##### `TrainedDurationInHours`<sup>Required</sup> <a name="TrainedDurationInHours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainedDurationInHours"></a>

```csharp
public double TrainedDurationInHours { get; }
```

- *Type:* double

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDataset"></a>

```csharp
public AiVisionModelTrainingDatasetOutputReference TrainingDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference">AiVisionModelTrainingDatasetOutputReference</a>

---

##### `ValidationDataset`<sup>Required</sup> <a name="ValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDataset"></a>

```csharp
public AiVisionModelValidationDatasetOutputReference ValidationDataset { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference">AiVisionModelValidationDatasetOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsQuickModeInput`<sup>Optional</sup> <a name="IsQuickModeInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickModeInput"></a>

```csharp
public object IsQuickModeInput { get; }
```

- *Type:* object

---

##### `MaxTrainingDurationInHoursInput`<sup>Optional</sup> <a name="MaxTrainingDurationInHoursInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHoursInput"></a>

```csharp
public double MaxTrainingDurationInHoursInput { get; }
```

- *Type:* double

---

##### `ModelTypeInput`<sup>Optional</sup> <a name="ModelTypeInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelTypeInput"></a>

```csharp
public string ModelTypeInput { get; }
```

- *Type:* string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersionInput"></a>

```csharp
public string ModelVersionInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TestingDatasetInput`<sup>Optional</sup> <a name="TestingDatasetInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDatasetInput"></a>

```csharp
public AiVisionModelTestingDataset TestingDatasetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrainingDatasetInput`<sup>Optional</sup> <a name="TrainingDatasetInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDatasetInput"></a>

```csharp
public AiVisionModelTrainingDataset TrainingDatasetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

---

##### `ValidationDatasetInput`<sup>Optional</sup> <a name="ValidationDatasetInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDatasetInput"></a>

```csharp
public AiVisionModelValidationDataset ValidationDatasetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsQuickMode`<sup>Required</sup> <a name="IsQuickMode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickMode"></a>

```csharp
public object IsQuickMode { get; }
```

- *Type:* object

---

##### `MaxTrainingDurationInHours`<sup>Required</sup> <a name="MaxTrainingDurationInHours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHours"></a>

```csharp
public double MaxTrainingDurationInHours { get; }
```

- *Type:* double

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersion"></a>

```csharp
public string ModelVersion { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiVisionModelConfig <a name="AiVisionModelConfig" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ModelType,
    string ProjectId,
    AiVisionModelTrainingDataset TrainingDataset,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsQuickMode = null,
    double MaxTrainingDurationInHours = null,
    string ModelVersion = null,
    AiVisionModelTestingDataset TestingDataset = null,
    AiVisionModelTimeouts Timeouts = null,
    AiVisionModelValidationDataset ValidationDataset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelType">ModelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.isQuickMode">IsQuickMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.maxTrainingDurationInHours">MaxTrainingDurationInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelVersion">ModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.testingDataset">TestingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.validationDataset">ValidationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | validation_dataset block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}.

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelType"></a>

```csharp
public string ModelType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}.

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.trainingDataset"></a>

```csharp
public AiVisionModelTrainingDataset TrainingDataset { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#training_dataset AiVisionModel#training_dataset}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsQuickMode`<sup>Optional</sup> <a name="IsQuickMode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.isQuickMode"></a>

```csharp
public object IsQuickMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}.

---

##### `MaxTrainingDurationInHours`<sup>Optional</sup> <a name="MaxTrainingDurationInHours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.maxTrainingDurationInHours"></a>

```csharp
public double MaxTrainingDurationInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}.

---

##### `ModelVersion`<sup>Optional</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelVersion"></a>

```csharp
public string ModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}.

---

##### `TestingDataset`<sup>Optional</sup> <a name="TestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.testingDataset"></a>

```csharp
public AiVisionModelTestingDataset TestingDataset { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#testing_dataset AiVisionModel#testing_dataset}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.timeouts"></a>

```csharp
public AiVisionModelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#timeouts AiVisionModel#timeouts}

---

##### `ValidationDataset`<sup>Optional</sup> <a name="ValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.validationDataset"></a>

```csharp
public AiVisionModelValidationDataset ValidationDataset { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#validation_dataset AiVisionModel#validation_dataset}

---

### AiVisionModelTestingDataset <a name="AiVisionModelTestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTestingDataset {
    string DatasetType,
    string Bucket = null,
    string DatasetId = null,
    string NamespaceName = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetType">DatasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetId">DatasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetType"></a>

```csharp
public string DatasetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

### AiVisionModelTimeouts <a name="AiVisionModelTimeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#create AiVisionModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#delete AiVisionModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#update AiVisionModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#create AiVisionModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#delete AiVisionModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#update AiVisionModel#update}.

---

### AiVisionModelTrainingDataset <a name="AiVisionModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTrainingDataset {
    string DatasetType,
    string Bucket = null,
    string DatasetId = null,
    string NamespaceName = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetType">DatasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetId">DatasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetType"></a>

```csharp
public string DatasetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

### AiVisionModelValidationDataset <a name="AiVisionModelValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelValidationDataset {
    string DatasetType,
    string Bucket = null,
    string DatasetId = null,
    string NamespaceName = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetType">DatasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetId">DatasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetType"></a>

```csharp
public string DatasetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiVisionModelTestingDatasetOutputReference <a name="AiVisionModelTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTestingDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetTypeInput"></a>

```csharp
public string DatasetTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.internalValue"></a>

```csharp
public AiVisionModelTestingDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

---


### AiVisionModelTimeoutsOutputReference <a name="AiVisionModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiVisionModelTrainingDatasetOutputReference <a name="AiVisionModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelTrainingDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```csharp
public string DatasetTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.internalValue"></a>

```csharp
public AiVisionModelTrainingDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

---


### AiVisionModelValidationDatasetOutputReference <a name="AiVisionModelValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiVisionModelValidationDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetTypeInput"></a>

```csharp
public string DatasetTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetType"></a>

```csharp
public string DatasetType { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.internalValue"></a>

```csharp
public AiVisionModelValidationDataset InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

---



