# `coreCaptureFilter` Submodule <a name="`coreCaptureFilter` Submodule" id="rhizo-co-terraform-provider-oci.coreCaptureFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCaptureFilter <a name="CoreCaptureFilter" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter oci_core_capture_filter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilter(Construct Scope, string Id, CoreCaptureFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig">CoreCaptureFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig">CoreCaptureFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules">PutFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules">PutVtapCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules">ResetFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules">ResetVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowLogCaptureFilterRules` <a name="PutFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules"></a>

```csharp
private void PutFlowLogCaptureFilterRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreCaptureFilterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---

##### `PutVtapCaptureFilterRules` <a name="PutVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules"></a>

```csharp
private void PutVtapCaptureFilterRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules.parameter.value"></a>

- *Type:* object

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFlowLogCaptureFilterRules` <a name="ResetFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules"></a>

```csharp
private void ResetFlowLogCaptureFilterRules()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVtapCaptureFilterRules` <a name="ResetVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules"></a>

```csharp
private void ResetVtapCaptureFilterRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCaptureFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCaptureFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCaptureFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCaptureFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreCaptureFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreCaptureFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreCaptureFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules">FlowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules">VtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput">FlowLogCaptureFilterRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput">VtapCaptureFilterRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FlowLogCaptureFilterRules`<sup>Required</sup> <a name="FlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesList FlowLogCaptureFilterRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts"></a>

```csharp
public CoreCaptureFilterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a>

---

##### `VtapCaptureFilterRules`<sup>Required</sup> <a name="VtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesList VtapCaptureFilterRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `FlowLogCaptureFilterRulesInput`<sup>Optional</sup> <a name="FlowLogCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput"></a>

```csharp
public object FlowLogCaptureFilterRulesInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VtapCaptureFilterRulesInput`<sup>Optional</sup> <a name="VtapCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput"></a>

```csharp
public object VtapCaptureFilterRulesInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCaptureFilterConfig <a name="CoreCaptureFilterConfig" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string FilterType,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    object FlowLogCaptureFilterRules = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CoreCaptureFilterTimeouts Timeouts = null,
    object VtapCaptureFilterRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType">FilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules">FlowLogCaptureFilterRules</a></code> | <code>object</code> | flow_log_capture_filter_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules">VtapCaptureFilterRules</a></code> | <code>object</code> | vtap_capture_filter_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}.

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}.

---

##### `FlowLogCaptureFilterRules`<sup>Optional</sup> <a name="FlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules"></a>

```csharp
public object FlowLogCaptureFilterRules { get; set; }
```

- *Type:* object

flow_log_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_capture_filter_rules CoreCaptureFilter#flow_log_capture_filter_rules}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts"></a>

```csharp
public CoreCaptureFilterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#timeouts CoreCaptureFilter#timeouts}

---

##### `VtapCaptureFilterRules`<sup>Optional</sup> <a name="VtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules"></a>

```csharp
public object VtapCaptureFilterRules { get; set; }
```

- *Type:* object

vtap_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#vtap_capture_filter_rules CoreCaptureFilter#vtap_capture_filter_rules}

---

### CoreCaptureFilterFlowLogCaptureFilterRules <a name="CoreCaptureFilterFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRules {
    string DestinationCidr = null,
    string FlowLogType = null,
    CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions IcmpOptions = null,
    object IsEnabled = null,
    double Priority = null,
    string Protocol = null,
    string RuleAction = null,
    double SamplingRate = null,
    string SourceCidr = null,
    CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions TcpOptions = null,
    CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions UdpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType">FlowLogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate">SamplingRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr">SourceCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `DestinationCidr`<sup>Optional</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `FlowLogType`<sup>Optional</sup> <a name="FlowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType"></a>

```csharp
public string FlowLogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions IcmpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `RuleAction`<sup>Optional</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}.

---

##### `SourceCidr`<sup>Optional</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr"></a>

```csharp
public string SourceCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions TcpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions UdpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions {
    double Type,
    double Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions {
    CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRange = null,
    CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions {
    CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRange = null,
    CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterTimeouts <a name="CoreCaptureFilterTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}.

---

### CoreCaptureFilterVtapCaptureFilterRules <a name="CoreCaptureFilterVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRules {
    string TrafficDirection,
    string DestinationCidr = null,
    CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions IcmpOptions = null,
    string Protocol = null,
    string RuleAction = null,
    string SourceCidr = null,
    CoreCaptureFilterVtapCaptureFilterRulesTcpOptions TcpOptions = null,
    CoreCaptureFilterVtapCaptureFilterRulesUdpOptions UdpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr">SourceCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}.

---

##### `DestinationCidr`<sup>Optional</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions IcmpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `RuleAction`<sup>Optional</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `SourceCidr`<sup>Optional</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr"></a>

```csharp
public string SourceCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions TcpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions UdpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions {
    double Type,
    double Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptions {
    CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRange = null,
    CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptions {
    CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRange = null,
    CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesList <a name="CoreCaptureFilterFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get"></a>

```csharp
private CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr">ResetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType">ResetFlowLogType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction">ResetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr">ResetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```csharp
private void PutIcmpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions"></a>

```csharp
private void PutTcpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions"></a>

```csharp
private void PutUdpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `ResetDestinationCidr` <a name="ResetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```csharp
private void ResetDestinationCidr()
```

##### `ResetFlowLogType` <a name="ResetFlowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType"></a>

```csharp
private void ResetFlowLogType()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```csharp
private void ResetIcmpOptions()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRuleAction` <a name="ResetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction"></a>

```csharp
private void ResetRuleAction()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate"></a>

```csharp
private void ResetSamplingRate()
```

##### `ResetSourceCidr` <a name="ResetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```csharp
private void ResetSourceCidr()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```csharp
private void ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```csharp
private void ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput">DestinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput">FlowLogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput">SourceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType">FlowLogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">SourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference IcmpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference TcpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference UdpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `DestinationCidrInput`<sup>Optional</sup> <a name="DestinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```csharp
public string DestinationCidrInput { get; }
```

- *Type:* string

---

##### `FlowLogTypeInput`<sup>Optional</sup> <a name="FlowLogTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput"></a>

```csharp
public string FlowLogTypeInput { get; }
```

- *Type:* string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions IcmpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `SourceCidrInput`<sup>Optional</sup> <a name="SourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```csharp
public string SourceCidrInput { get; }
```

- *Type:* string

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions TcpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions UdpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; }
```

- *Type:* string

---

##### `FlowLogType`<sup>Required</sup> <a name="FlowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```csharp
public string FlowLogType { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `SourceCidr`<sup>Required</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```csharp
public string SourceCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### CoreCaptureFilterTimeoutsOutputReference <a name="CoreCaptureFilterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesList <a name="CoreCaptureFilterVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get"></a>

```csharp
private CoreCaptureFilterVtapCaptureFilterRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreCaptureFilterVtapCaptureFilterRulesOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr">ResetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction">ResetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr">ResetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```csharp
private void PutIcmpOptions(CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions"></a>

```csharp
private void PutTcpOptions(CoreCaptureFilterVtapCaptureFilterRulesTcpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions"></a>

```csharp
private void PutUdpOptions(CoreCaptureFilterVtapCaptureFilterRulesUdpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `ResetDestinationCidr` <a name="ResetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```csharp
private void ResetDestinationCidr()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```csharp
private void ResetIcmpOptions()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRuleAction` <a name="ResetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction"></a>

```csharp
private void ResetRuleAction()
```

##### `ResetSourceCidr` <a name="ResetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```csharp
private void ResetSourceCidr()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```csharp
private void ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```csharp
private void ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput">DestinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput">SourceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput">TrafficDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr">SourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference IcmpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference TcpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference UdpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `DestinationCidrInput`<sup>Optional</sup> <a name="DestinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```csharp
public string DestinationCidrInput { get; }
```

- *Type:* string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions IcmpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `SourceCidrInput`<sup>Optional</sup> <a name="SourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```csharp
public string SourceCidrInput { get; }
```

- *Type:* string

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions TcpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `TrafficDirectionInput`<sup>Optional</sup> <a name="TrafficDirectionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput"></a>

```csharp
public string TrafficDirectionInput { get; }
```

- *Type:* string

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions UdpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `SourceCidr`<sup>Required</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```csharp
public string SourceCidr { get; }
```

- *Type:* string

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---



