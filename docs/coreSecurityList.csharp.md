# `coreSecurityList` Submodule <a name="`coreSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreSecurityList <a name="CoreSecurityList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list oci_core_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityList(Construct Scope, string Id, CoreSecurityListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig">CoreSecurityListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig">CoreSecurityListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules">PutEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules">PutIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetEgressSecurityRules">ResetEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetIngressSecurityRules">ResetIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressSecurityRules` <a name="PutEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules"></a>

```csharp
private void PutEgressSecurityRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* object

---

##### `PutIngressSecurityRules` <a name="PutIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules"></a>

```csharp
private void PutIngressSecurityRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreSecurityListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEgressSecurityRules` <a name="ResetEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetEgressSecurityRules"></a>

```csharp
private void ResetEgressSecurityRules()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressSecurityRules` <a name="ResetIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetIngressSecurityRules"></a>

```csharp
private void ResetIngressSecurityRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreSecurityList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreSecurityList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreSecurityList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreSecurityList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreSecurityList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreSecurityList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRules">EgressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList">CoreSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRules">IngressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList">CoreSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference">CoreSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRulesInput">EgressSecurityRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRulesInput">IngressSecurityRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EgressSecurityRules`<sup>Required</sup> <a name="EgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRules"></a>

```csharp
public CoreSecurityListEgressSecurityRulesList EgressSecurityRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList">CoreSecurityListEgressSecurityRulesList</a>

---

##### `IngressSecurityRules`<sup>Required</sup> <a name="IngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRules"></a>

```csharp
public CoreSecurityListIngressSecurityRulesList IngressSecurityRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList">CoreSecurityListIngressSecurityRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeouts"></a>

```csharp
public CoreSecurityListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference">CoreSecurityListTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EgressSecurityRulesInput`<sup>Optional</sup> <a name="EgressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRulesInput"></a>

```csharp
public object EgressSecurityRulesInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressSecurityRulesInput`<sup>Optional</sup> <a name="IngressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRulesInput"></a>

```csharp
public object IngressSecurityRulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreSecurityListConfig <a name="CoreSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string VcnId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    object EgressSecurityRules = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IngressSecurityRules = null,
    CoreSecurityListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.egressSecurityRules">EgressSecurityRules</a></code> | <code>object</code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.ingressSecurityRules">IngressSecurityRules</a></code> | <code>object</code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}.

---

##### `EgressSecurityRules`<sup>Optional</sup> <a name="EgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.egressSecurityRules"></a>

```csharp
public object EgressSecurityRules { get; set; }
```

- *Type:* object

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#egress_security_rules CoreSecurityList#egress_security_rules}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressSecurityRules`<sup>Optional</sup> <a name="IngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.ingressSecurityRules"></a>

```csharp
public object IngressSecurityRules { get; set; }
```

- *Type:* object

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#ingress_security_rules CoreSecurityList#ingress_security_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.timeouts"></a>

```csharp
public CoreSecurityListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#timeouts CoreSecurityList#timeouts}

---

### CoreSecurityListEgressSecurityRules <a name="CoreSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRules {
    string Destination,
    string Protocol,
    string Description = null,
    string DestinationType = null,
    CoreSecurityListEgressSecurityRulesIcmpOptions IcmpOptions = null,
    object Stateless = null,
    CoreSecurityListEgressSecurityRulesTcpOptions TcpOptions = null,
    CoreSecurityListEgressSecurityRulesUdpOptions UdpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination CoreSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination_type CoreSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.stateless">Stateless</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination CoreSecurityList#destination}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination_type CoreSecurityList#destination_type}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.icmpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesIcmpOptions IcmpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}

---

##### `Stateless`<sup>Optional</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.stateless"></a>

```csharp
public object Stateless { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.tcpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptions TcpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.udpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptions UdpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}

---

### CoreSecurityListEgressSecurityRulesIcmpOptions <a name="CoreSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesIcmpOptions {
    double Type,
    double Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}.

---

### CoreSecurityListEgressSecurityRulesTcpOptions <a name="CoreSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesTcpOptions {
    double Max = null,
    double Min = null,
    CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListEgressSecurityRulesUdpOptions <a name="CoreSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesUdpOptions {
    double Max = null,
    double Min = null,
    CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListIngressSecurityRules <a name="CoreSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRules {
    string Protocol,
    string Source,
    string Description = null,
    CoreSecurityListIngressSecurityRulesIcmpOptions IcmpOptions = null,
    string SourceType = null,
    object Stateless = null,
    CoreSecurityListIngressSecurityRulesTcpOptions TcpOptions = null,
    CoreSecurityListIngressSecurityRulesUdpOptions UdpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source CoreSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_type CoreSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.stateless">Stateless</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source CoreSecurityList#source}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.icmpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesIcmpOptions IcmpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_type CoreSecurityList#source_type}.

---

##### `Stateless`<sup>Optional</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.stateless"></a>

```csharp
public object Stateless { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.tcpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptions TcpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.udpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptions UdpOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}

---

### CoreSecurityListIngressSecurityRulesIcmpOptions <a name="CoreSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesIcmpOptions {
    double Type,
    double Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}.

---

### CoreSecurityListIngressSecurityRulesTcpOptions <a name="CoreSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesTcpOptions {
    double Max = null,
    double Min = null,
    CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListIngressSecurityRulesUdpOptions <a name="CoreSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesUdpOptions {
    double Max = null,
    double Min = null,
    CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListTimeouts <a name="CoreSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#create CoreSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#delete CoreSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#update CoreSecurityList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#create CoreSecurityList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#delete CoreSecurityList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#update CoreSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListEgressSecurityRulesIcmpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreSecurityListEgressSecurityRulesList <a name="CoreSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get"></a>

```csharp
private CoreSecurityListEgressSecurityRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreSecurityListEgressSecurityRulesOutputReference <a name="CoreSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetStateless">ResetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```csharp
private void PutIcmpOptions(CoreSecurityListEgressSecurityRulesIcmpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```csharp
private void PutTcpOptions(CoreSecurityListEgressSecurityRulesTcpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```csharp
private void PutUdpOptions(CoreSecurityListEgressSecurityRulesUdpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```csharp
private void ResetIcmpOptions()
```

##### `ResetStateless` <a name="ResetStateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```csharp
private void ResetStateless()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```csharp
private void ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```csharp
private void ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.statelessInput">StatelessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference IcmpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference TcpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference UdpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```csharp
public CoreSecurityListEgressSecurityRulesIcmpOptions IcmpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `StatelessInput`<sup>Optional</sup> <a name="StatelessInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```csharp
public object StatelessInput { get; }
```

- *Type:* object

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptions TcpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptions UdpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```csharp
public object Stateless { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListIngressSecurityRulesIcmpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreSecurityListIngressSecurityRulesList <a name="CoreSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get"></a>

```csharp
private CoreSecurityListIngressSecurityRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreSecurityListIngressSecurityRulesOutputReference <a name="CoreSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetStateless">ResetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```csharp
private void PutIcmpOptions(CoreSecurityListIngressSecurityRulesIcmpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```csharp
private void PutTcpOptions(CoreSecurityListIngressSecurityRulesTcpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```csharp
private void PutUdpOptions(CoreSecurityListIngressSecurityRulesUdpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```csharp
private void ResetIcmpOptions()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetStateless` <a name="ResetStateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```csharp
private void ResetStateless()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```csharp
private void ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```csharp
private void ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.statelessInput">StatelessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference IcmpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference TcpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference UdpOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```csharp
public CoreSecurityListIngressSecurityRulesIcmpOptions IcmpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `StatelessInput`<sup>Optional</sup> <a name="StatelessInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```csharp
public object StatelessInput { get; }
```

- *Type:* object

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptions TcpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptions UdpOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```csharp
public object Stateless { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreSecurityListTimeoutsOutputReference <a name="CoreSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreSecurityListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



