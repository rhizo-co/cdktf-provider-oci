# `aiDocumentProcessorJob` Submodule <a name="`aiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessorJob <a name="AiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJob(Construct Scope, string Id, AiDocumentProcessorJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation">PutInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig">PutProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputLocation` <a name="PutInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation"></a>

```csharp
private void PutInputLocation(AiDocumentProcessorJobInputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation"></a>

```csharp
private void PutOutputLocation(AiDocumentProcessorJobOutputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `PutProcessorConfig` <a name="PutProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig"></a>

```csharp
private void PutProcessorConfig(AiDocumentProcessorJobProcessorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts"></a>

```csharp
private void PutTimeouts(AiDocumentProcessorJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiDocumentProcessorJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiDocumentProcessorJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiDocumentProcessorJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiDocumentProcessorJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiDocumentProcessorJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation">InputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation">OutputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete">PercentComplete</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig">ProcessorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput">InputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput">OutputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput">ProcessorConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation"></a>

```csharp
public AiDocumentProcessorJobInputLocationOutputReference InputLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation"></a>

```csharp
public AiDocumentProcessorJobOutputLocationOutputReference OutputLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a>

---

##### `PercentComplete`<sup>Required</sup> <a name="PercentComplete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete"></a>

```csharp
public double PercentComplete { get; }
```

- *Type:* double

---

##### `ProcessorConfig`<sup>Required</sup> <a name="ProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig"></a>

```csharp
public AiDocumentProcessorJobProcessorConfigOutputReference ProcessorConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts"></a>

```csharp
public AiDocumentProcessorJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputLocationInput`<sup>Optional</sup> <a name="InputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput"></a>

```csharp
public AiDocumentProcessorJobInputLocation InputLocationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput"></a>

```csharp
public AiDocumentProcessorJobOutputLocation OutputLocationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `ProcessorConfigInput`<sup>Optional</sup> <a name="ProcessorConfigInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput"></a>

```csharp
public AiDocumentProcessorJobProcessorConfig ProcessorConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorJobConfig <a name="AiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    AiDocumentProcessorJobInputLocation InputLocation,
    AiDocumentProcessorJobOutputLocation OutputLocation,
    AiDocumentProcessorJobProcessorConfig ProcessorConfig,
    string DisplayName = null,
    string Id = null,
    AiDocumentProcessorJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation">InputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig">ProcessorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation"></a>

```csharp
public AiDocumentProcessorJobInputLocation InputLocation { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation"></a>

```csharp
public AiDocumentProcessorJobOutputLocation OutputLocation { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `ProcessorConfig`<sup>Required</sup> <a name="ProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig"></a>

```csharp
public AiDocumentProcessorJobProcessorConfig ProcessorConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts"></a>

```csharp
public AiDocumentProcessorJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

### AiDocumentProcessorJobInputLocation <a name="AiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobInputLocation {
    string SourceType,
    string Data = null,
    object ObjectLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations">ObjectLocations</a></code> | <code>object</code> | object_locations block. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

##### `ObjectLocations`<sup>Optional</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations"></a>

```csharp
public object ObjectLocations { get; set; }
```

- *Type:* object

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

### AiDocumentProcessorJobInputLocationObjectLocations <a name="AiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobInputLocationObjectLocations {
    string Bucket = null,
    string Namespace = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}.

---

### AiDocumentProcessorJobOutputLocation <a name="AiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobOutputLocation {
    string Bucket,
    string Namespace,
    string Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

### AiDocumentProcessorJobProcessorConfig <a name="AiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobProcessorConfig {
    object Features,
    string ProcessorType,
    string DocumentType = null,
    object IsZipOutputEnabled = null,
    string Language = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features">Features</a></code> | <code>object</code> | features block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType">ProcessorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType">DocumentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled">IsZipOutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}. |

---

##### `Features`<sup>Required</sup> <a name="Features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features"></a>

```csharp
public object Features { get; set; }
```

- *Type:* object

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType"></a>

```csharp
public string ProcessorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType"></a>

```csharp
public string DocumentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

##### `IsZipOutputEnabled`<sup>Optional</sup> <a name="IsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled"></a>

```csharp
public object IsZipOutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

### AiDocumentProcessorJobProcessorConfigFeatures <a name="AiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobProcessorConfigFeatures {
    string FeatureType,
    object GenerateSearchablePdf = null,
    double MaxResults = null,
    string ModelId = null,
    string TenancyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType">FeatureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf">GenerateSearchablePdf</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults">MaxResults</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId">TenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}. |

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType"></a>

```csharp
public string FeatureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}.

---

##### `GenerateSearchablePdf`<sup>Optional</sup> <a name="GenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf"></a>

```csharp
public object GenerateSearchablePdf { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}.

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults"></a>

```csharp
public double MaxResults { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}.

---

##### `TenancyId`<sup>Optional</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId"></a>

```csharp
public string TenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}.

---

### AiDocumentProcessorJobTimeouts <a name="AiDocumentProcessorJobTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentProcessorJobInputLocationObjectLocationsList <a name="AiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobInputLocationObjectLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```csharp
private AiDocumentProcessorJobInputLocationObjectLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="AiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobInputLocationObjectLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiDocumentProcessorJobInputLocationOutputReference <a name="AiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobInputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations">PutObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations">ResetObjectLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectLocations` <a name="PutObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations"></a>

```csharp
private void PutObjectLocations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* object

---

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetObjectLocations` <a name="ResetObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations"></a>

```csharp
private void ResetObjectLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput">ObjectLocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```csharp
public AiDocumentProcessorJobInputLocationObjectLocationsList ObjectLocations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `ObjectLocationsInput`<sup>Optional</sup> <a name="ObjectLocationsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput"></a>

```csharp
public object ObjectLocationsInput { get; }
```

- *Type:* object

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```csharp
public AiDocumentProcessorJobInputLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---


### AiDocumentProcessorJobOutputLocationOutputReference <a name="AiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobOutputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```csharp
public AiDocumentProcessorJobOutputLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---


### AiDocumentProcessorJobProcessorConfigFeaturesList <a name="AiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobProcessorConfigFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```csharp
private AiDocumentProcessorJobProcessorConfigFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="AiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobProcessorConfigFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf">ResetGenerateSearchablePdf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults">ResetMaxResults</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId">ResetTenancyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGenerateSearchablePdf` <a name="ResetGenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf"></a>

```csharp
private void ResetGenerateSearchablePdf()
```

##### `ResetMaxResults` <a name="ResetMaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults"></a>

```csharp
private void ResetMaxResults()
```

##### `ResetModelId` <a name="ResetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId"></a>

```csharp
private void ResetModelId()
```

##### `ResetTenancyId` <a name="ResetTenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId"></a>

```csharp
private void ResetTenancyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput">GenerateSearchablePdfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput">MaxResultsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput">TenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">FeatureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">GenerateSearchablePdf</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">MaxResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput"></a>

```csharp
public string FeatureTypeInput { get; }
```

- *Type:* string

---

##### `GenerateSearchablePdfInput`<sup>Optional</sup> <a name="GenerateSearchablePdfInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput"></a>

```csharp
public object GenerateSearchablePdfInput { get; }
```

- *Type:* object

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput"></a>

```csharp
public double MaxResultsInput { get; }
```

- *Type:* double

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput"></a>

```csharp
public string TenancyIdInput { get; }
```

- *Type:* string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```csharp
public string FeatureType { get; }
```

- *Type:* string

---

##### `GenerateSearchablePdf`<sup>Required</sup> <a name="GenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```csharp
public object GenerateSearchablePdf { get; }
```

- *Type:* object

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```csharp
public double MaxResults { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiDocumentProcessorJobProcessorConfigOutputReference <a name="AiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobProcessorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled">ResetIsZipOutputEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatures` <a name="PutFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures"></a>

```csharp
private void PutFeatures(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures.parameter.value"></a>

- *Type:* object

---

##### `ResetDocumentType` <a name="ResetDocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType"></a>

```csharp
private void ResetDocumentType()
```

##### `ResetIsZipOutputEnabled` <a name="ResetIsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled"></a>

```csharp
private void ResetIsZipOutputEnabled()
```

##### `ResetLanguage` <a name="ResetLanguage" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage"></a>

```csharp
private void ResetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features">Features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput">FeaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput">IsZipOutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">DocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">IsZipOutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">ProcessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```csharp
public AiDocumentProcessorJobProcessorConfigFeaturesList Features { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput"></a>

```csharp
public string DocumentTypeInput { get; }
```

- *Type:* string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput"></a>

```csharp
public object FeaturesInput { get; }
```

- *Type:* object

---

##### `IsZipOutputEnabledInput`<sup>Optional</sup> <a name="IsZipOutputEnabledInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput"></a>

```csharp
public object IsZipOutputEnabledInput { get; }
```

- *Type:* object

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput"></a>

```csharp
public string ProcessorTypeInput { get; }
```

- *Type:* string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```csharp
public string DocumentType { get; }
```

- *Type:* string

---

##### `IsZipOutputEnabled`<sup>Required</sup> <a name="IsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```csharp
public object IsZipOutputEnabled { get; }
```

- *Type:* object

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```csharp
public string ProcessorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```csharp
public AiDocumentProcessorJobProcessorConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---


### AiDocumentProcessorJobTimeoutsOutputReference <a name="AiDocumentProcessorJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiDocumentProcessorJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



