# `functionsInvokeFunction` Submodule <a name="`functionsInvokeFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsInvokeFunction <a name="FunctionsInvokeFunction" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function oci_functions_invoke_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FunctionsInvokeFunction(Construct Scope, string Id, FunctionsInvokeFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent">ResetFnIntent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType">ResetFnInvokeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath">ResetInputBodySourcePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody">ResetInvokeFunctionBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded">ResetInvokeFunctionBodyBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts"></a>

```csharp
private void PutTimeouts(FunctionsInvokeFunctionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent"></a>

```csharp
private void ResetBase64EncodeContent()
```

##### `ResetFnIntent` <a name="ResetFnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent"></a>

```csharp
private void ResetFnIntent()
```

##### `ResetFnInvokeType` <a name="ResetFnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType"></a>

```csharp
private void ResetFnInvokeType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputBodySourcePath` <a name="ResetInputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath"></a>

```csharp
private void ResetInputBodySourcePath()
```

##### `ResetInvokeFunctionBody` <a name="ResetInvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody"></a>

```csharp
private void ResetInvokeFunctionBody()
```

##### `ResetInvokeFunctionBodyBase64Encoded` <a name="ResetInvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded"></a>

```csharp
private void ResetInvokeFunctionBodyBase64Encoded()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FunctionsInvokeFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FunctionsInvokeFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FunctionsInvokeFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FunctionsInvokeFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionsInvokeFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionsInvokeFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsInvokeFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint">InvokeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput">FnIntentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput">FnInvokeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput">InputBodySourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput">InvokeFunctionBodyBase64EncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput">InvokeFunctionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent">FnIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType">FnInvokeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath">InputBodySourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody">InvokeFunctionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded">InvokeFunctionBodyBase64Encoded</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InvokeEndpoint`<sup>Required</sup> <a name="InvokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint"></a>

```csharp
public string InvokeEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts"></a>

```csharp
public FunctionsInvokeFunctionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a>

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput"></a>

```csharp
public object Base64EncodeContentInput { get; }
```

- *Type:* object

---

##### `FnIntentInput`<sup>Optional</sup> <a name="FnIntentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput"></a>

```csharp
public string FnIntentInput { get; }
```

- *Type:* string

---

##### `FnInvokeTypeInput`<sup>Optional</sup> <a name="FnInvokeTypeInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput"></a>

```csharp
public string FnInvokeTypeInput { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputBodySourcePathInput`<sup>Optional</sup> <a name="InputBodySourcePathInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput"></a>

```csharp
public string InputBodySourcePathInput { get; }
```

- *Type:* string

---

##### `InvokeFunctionBodyBase64EncodedInput`<sup>Optional</sup> <a name="InvokeFunctionBodyBase64EncodedInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput"></a>

```csharp
public string InvokeFunctionBodyBase64EncodedInput { get; }
```

- *Type:* string

---

##### `InvokeFunctionBodyInput`<sup>Optional</sup> <a name="InvokeFunctionBodyInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput"></a>

```csharp
public string InvokeFunctionBodyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; }
```

- *Type:* object

---

##### `FnIntent`<sup>Required</sup> <a name="FnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent"></a>

```csharp
public string FnIntent { get; }
```

- *Type:* string

---

##### `FnInvokeType`<sup>Required</sup> <a name="FnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType"></a>

```csharp
public string FnInvokeType { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputBodySourcePath`<sup>Required</sup> <a name="InputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath"></a>

```csharp
public string InputBodySourcePath { get; }
```

- *Type:* string

---

##### `InvokeFunctionBody`<sup>Required</sup> <a name="InvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody"></a>

```csharp
public string InvokeFunctionBody { get; }
```

- *Type:* string

---

##### `InvokeFunctionBodyBase64Encoded`<sup>Required</sup> <a name="InvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded"></a>

```csharp
public string InvokeFunctionBodyBase64Encoded { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsInvokeFunctionConfig <a name="FunctionsInvokeFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FunctionsInvokeFunctionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FunctionId,
    object Base64EncodeContent = null,
    string FnIntent = null,
    string FnInvokeType = null,
    string Id = null,
    string InputBodySourcePath = null,
    string InvokeFunctionBody = null,
    string InvokeFunctionBodyBase64Encoded = null,
    FunctionsInvokeFunctionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent">FnIntent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType">FnInvokeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath">InputBodySourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody">InvokeFunctionBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded">InvokeFunctionBodyBase64Encoded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `FnIntent`<sup>Optional</sup> <a name="FnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent"></a>

```csharp
public string FnIntent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `FnInvokeType`<sup>Optional</sup> <a name="FnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType"></a>

```csharp
public string FnInvokeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputBodySourcePath`<sup>Optional</sup> <a name="InputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath"></a>

```csharp
public string InputBodySourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `InvokeFunctionBody`<sup>Optional</sup> <a name="InvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody"></a>

```csharp
public string InvokeFunctionBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `InvokeFunctionBodyBase64Encoded`<sup>Optional</sup> <a name="InvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded"></a>

```csharp
public string InvokeFunctionBodyBase64Encoded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts"></a>

```csharp
public FunctionsInvokeFunctionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

### FunctionsInvokeFunctionTimeouts <a name="FunctionsInvokeFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FunctionsInvokeFunctionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsInvokeFunctionTimeoutsOutputReference <a name="FunctionsInvokeFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FunctionsInvokeFunctionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



