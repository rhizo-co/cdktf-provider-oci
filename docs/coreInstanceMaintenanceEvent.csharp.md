# `coreInstanceMaintenanceEvent` Submodule <a name="`coreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstanceMaintenanceEvent <a name="CoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceMaintenanceEvent(Construct Scope, string Id, CoreInstanceMaintenanceEventConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction">ResetAlternativeResolutionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage">ResetCanDeleteLocalStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart">ResetTimeWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreInstanceMaintenanceEventTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

---

##### `ResetAlternativeResolutionAction` <a name="ResetAlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction"></a>

```csharp
private void ResetAlternativeResolutionAction()
```

##### `ResetCanDeleteLocalStorage` <a name="ResetCanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage"></a>

```csharp
private void ResetCanDeleteLocalStorage()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeWindowStart` <a name="ResetTimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart"></a>

```csharp
private void ResetTimeWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstanceMaintenanceEvent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstanceMaintenanceEvent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstanceMaintenanceEvent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstanceMaintenanceEvent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreInstanceMaintenanceEvent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions">AlternativeResolutionActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule">CanReschedule</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken">CorrelationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration">EstimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction">InstanceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory">MaintenanceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason">MaintenanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration">StartWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate">TimeHardDueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput">AlternativeResolutionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput">CanDeleteLocalStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">InstanceMaintenanceEventIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput">TimeWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart">TimeWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AlternativeResolutionActions`<sup>Required</sup> <a name="AlternativeResolutionActions" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```csharp
public string[] AlternativeResolutionActions { get; }
```

- *Type:* string[]

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule"></a>

```csharp
public IResolvable CanReschedule { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CorrelationToken`<sup>Required</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken"></a>

```csharp
public string CorrelationToken { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EstimatedDuration`<sup>Required</sup> <a name="EstimatedDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```csharp
public string EstimatedDuration { get; }
```

- *Type:* string

---

##### `InstanceAction`<sup>Required</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction"></a>

```csharp
public string InstanceAction { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaintenanceCategory`<sup>Required</sup> <a name="MaintenanceCategory" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```csharp
public string MaintenanceCategory { get; }
```

- *Type:* string

---

##### `MaintenanceReason`<sup>Required</sup> <a name="MaintenanceReason" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```csharp
public string MaintenanceReason { get; }
```

- *Type:* string

---

##### `StartWindowDuration`<sup>Required</sup> <a name="StartWindowDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```csharp
public string StartWindowDuration { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeHardDueDate`<sup>Required</sup> <a name="TimeHardDueDate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```csharp
public string TimeHardDueDate { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts"></a>

```csharp
public CoreInstanceMaintenanceEventTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `AlternativeResolutionActionInput`<sup>Optional</sup> <a name="AlternativeResolutionActionInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput"></a>

```csharp
public string AlternativeResolutionActionInput { get; }
```

- *Type:* string

---

##### `CanDeleteLocalStorageInput`<sup>Optional</sup> <a name="CanDeleteLocalStorageInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput"></a>

```csharp
public object CanDeleteLocalStorageInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="InstanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```csharp
public string InstanceMaintenanceEventIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeWindowStartInput`<sup>Optional</sup> <a name="TimeWindowStartInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput"></a>

```csharp
public string TimeWindowStartInput { get; }
```

- *Type:* string

---

##### `AlternativeResolutionAction`<sup>Required</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```csharp
public string AlternativeResolutionAction { get; }
```

- *Type:* string

---

##### `CanDeleteLocalStorage`<sup>Required</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```csharp
public object CanDeleteLocalStorage { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```csharp
public string InstanceMaintenanceEventId { get; }
```

- *Type:* string

---

##### `TimeWindowStart`<sup>Required</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```csharp
public string TimeWindowStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceMaintenanceEventConfig <a name="CoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceMaintenanceEventConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceMaintenanceEventId,
    string AlternativeResolutionAction = null,
    object CanDeleteLocalStorage = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CoreInstanceMaintenanceEventTimeouts Timeouts = null,
    string TimeWindowStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart">TimeWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```csharp
public string InstanceMaintenanceEventId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

##### `AlternativeResolutionAction`<sup>Optional</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction"></a>

```csharp
public string AlternativeResolutionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}.

---

##### `CanDeleteLocalStorage`<sup>Optional</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage"></a>

```csharp
public object CanDeleteLocalStorage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts"></a>

```csharp
public CoreInstanceMaintenanceEventTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}

---

##### `TimeWindowStart`<sup>Optional</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart"></a>

```csharp
public string TimeWindowStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}.

---

### CoreInstanceMaintenanceEventTimeouts <a name="CoreInstanceMaintenanceEventTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceMaintenanceEventTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceMaintenanceEventTimeoutsOutputReference <a name="CoreInstanceMaintenanceEventTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceMaintenanceEventTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



