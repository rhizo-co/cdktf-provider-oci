# `budgetBudget` Submodule <a name="`budgetBudget` Submodule" id="rhizo-co-terraform-provider-oci.budgetBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetBudget <a name="BudgetBudget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget oci_budget_budget}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BudgetBudget(Construct Scope, string Id, BudgetBudgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig">BudgetBudgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig">BudgetBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset">ResetBudgetProcessingPeriodStartOffset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType">ResetProcessingPeriodType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId">ResetTargetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts"></a>

```csharp
private void PutTimeouts(BudgetBudgetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

---

##### `ResetBudgetProcessingPeriodStartOffset` <a name="ResetBudgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset"></a>

```csharp
private void ResetBudgetProcessingPeriodStartOffset()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndDate` <a name="ResetEndDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProcessingPeriodType` <a name="ResetProcessingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType"></a>

```csharp
private void ResetProcessingPeriodType()
```

##### `ResetStartDate` <a name="ResetStartDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTargetCompartmentId` <a name="ResetTargetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId"></a>

```csharp
private void ResetTargetCompartmentId()
```

##### `ResetTargets` <a name="ResetTargets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetTargetType` <a name="ResetTargetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType"></a>

```csharp
private void ResetTargetType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BudgetBudget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BudgetBudget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BudgetBudget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BudgetBudget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BudgetBudget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BudgetBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BudgetBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend">ActualSpend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount">AlertRuleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend">ForecastedSpend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed">TimeSpendComputed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput">BudgetProcessingPeriodStartOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput">ProcessingPeriodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput">ResetPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput">TargetCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset">BudgetProcessingPeriodStartOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType">ProcessingPeriodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod">ResetPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActualSpend`<sup>Required</sup> <a name="ActualSpend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend"></a>

```csharp
public double ActualSpend { get; }
```

- *Type:* double

---

##### `AlertRuleCount`<sup>Required</sup> <a name="AlertRuleCount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount"></a>

```csharp
public double AlertRuleCount { get; }
```

- *Type:* double

---

##### `ForecastedSpend`<sup>Required</sup> <a name="ForecastedSpend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend"></a>

```csharp
public double ForecastedSpend { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts"></a>

```csharp
public BudgetBudgetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a>

---

##### `TimeSpendComputed`<sup>Required</sup> <a name="TimeSpendComputed" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed"></a>

```csharp
public string TimeSpendComputed { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `BudgetProcessingPeriodStartOffsetInput`<sup>Optional</sup> <a name="BudgetProcessingPeriodStartOffsetInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput"></a>

```csharp
public double BudgetProcessingPeriodStartOffsetInput { get; }
```

- *Type:* double

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProcessingPeriodTypeInput`<sup>Optional</sup> <a name="ProcessingPeriodTypeInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput"></a>

```csharp
public string ProcessingPeriodTypeInput { get; }
```

- *Type:* string

---

##### `ResetPeriodInput`<sup>Optional</sup> <a name="ResetPeriodInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput"></a>

```csharp
public string ResetPeriodInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TargetCompartmentIdInput`<sup>Optional</sup> <a name="TargetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput"></a>

```csharp
public string TargetCompartmentIdInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `BudgetProcessingPeriodStartOffset`<sup>Required</sup> <a name="BudgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset"></a>

```csharp
public double BudgetProcessingPeriodStartOffset { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProcessingPeriodType`<sup>Required</sup> <a name="ProcessingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType"></a>

```csharp
public string ProcessingPeriodType { get; }
```

- *Type:* string

---

##### `ResetPeriod`<sup>Required</sup> <a name="ResetPeriod" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod"></a>

```csharp
public string ResetPeriod { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `TargetCompartmentId`<sup>Required</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId"></a>

```csharp
public string TargetCompartmentId { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetBudgetConfig <a name="BudgetBudgetConfig" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BudgetBudgetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Amount,
    string CompartmentId,
    string ResetPeriod,
    double BudgetProcessingPeriodStartOffset = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    string EndDate = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string ProcessingPeriodType = null,
    string StartDate = null,
    string TargetCompartmentId = null,
    string[] Targets = null,
    string TargetType = null,
    BudgetBudgetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod">ResetPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset">BudgetProcessingPeriodStartOffset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType">ProcessingPeriodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets">Targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}.

---

##### `ResetPeriod`<sup>Required</sup> <a name="ResetPeriod" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod"></a>

```csharp
public string ResetPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}.

---

##### `BudgetProcessingPeriodStartOffset`<sup>Optional</sup> <a name="BudgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset"></a>

```csharp
public double BudgetProcessingPeriodStartOffset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProcessingPeriodType`<sup>Optional</sup> <a name="ProcessingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType"></a>

```csharp
public string ProcessingPeriodType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}.

---

##### `TargetCompartmentId`<sup>Optional</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId"></a>

```csharp
public string TargetCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}.

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts"></a>

```csharp
public BudgetBudgetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#timeouts BudgetBudget#timeouts}

---

### BudgetBudgetTimeouts <a name="BudgetBudgetTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BudgetBudgetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetBudgetTimeoutsOutputReference <a name="BudgetBudgetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BudgetBudgetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



