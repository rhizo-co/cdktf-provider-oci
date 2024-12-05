# `resourceSchedulerSchedule` Submodule <a name="`resourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSchedulerSchedule <a name="ResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerSchedule(Construct Scope, string Id, ResourceSchedulerScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters">PutResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters">ResetResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds">ResetTimeEnds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts">ResetTimeStarts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceFilters` <a name="PutResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters"></a>

```csharp
private void PutResourceFilters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters.parameter.value"></a>

- *Type:* object

---

##### `PutResources` <a name="PutResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources"></a>

```csharp
private void PutResources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceSchedulerScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceFilters` <a name="ResetResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters"></a>

```csharp
private void ResetResourceFilters()
```

##### `ResetResources` <a name="ResetResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeEnds` <a name="ResetTimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds"></a>

```csharp
private void ResetTimeEnds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeStarts` <a name="ResetTimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts"></a>

```csharp
private void ResetTimeStarts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ResourceSchedulerSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ResourceSchedulerSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ResourceSchedulerSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ResourceSchedulerSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceSchedulerSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters">ResourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun">TimeLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun">TimeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput">RecurrenceDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput">ResourceFiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput">ResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput">TimeEndsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput">TimeStartsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails">RecurrenceDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds">TimeEnds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts">TimeStarts</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceFilters`<sup>Required</sup> <a name="ResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters"></a>

```csharp
public ResourceSchedulerScheduleResourceFiltersList ResourceFilters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources"></a>

```csharp
public ResourceSchedulerScheduleResourcesList Resources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastRun`<sup>Required</sup> <a name="TimeLastRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun"></a>

```csharp
public string TimeLastRun { get; }
```

- *Type:* string

---

##### `TimeNextRun`<sup>Required</sup> <a name="TimeNextRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun"></a>

```csharp
public string TimeNextRun { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts"></a>

```csharp
public ResourceSchedulerScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RecurrenceDetailsInput`<sup>Optional</sup> <a name="RecurrenceDetailsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput"></a>

```csharp
public string RecurrenceDetailsInput { get; }
```

- *Type:* string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput"></a>

```csharp
public string RecurrenceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceFiltersInput`<sup>Optional</sup> <a name="ResourceFiltersInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput"></a>

```csharp
public object ResourceFiltersInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput"></a>

```csharp
public object ResourcesInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeEndsInput`<sup>Optional</sup> <a name="TimeEndsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput"></a>

```csharp
public string TimeEndsInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeStartsInput`<sup>Optional</sup> <a name="TimeStartsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput"></a>

```csharp
public string TimeStartsInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecurrenceDetails`<sup>Required</sup> <a name="RecurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails"></a>

```csharp
public string RecurrenceDetails { get; }
```

- *Type:* string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeEnds`<sup>Required</sup> <a name="TimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds"></a>

```csharp
public string TimeEnds { get; }
```

- *Type:* string

---

##### `TimeStarts`<sup>Required</sup> <a name="TimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts"></a>

```csharp
public string TimeStarts { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSchedulerScheduleConfig <a name="ResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string CompartmentId,
    string RecurrenceDetails,
    string RecurrenceType,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object ResourceFilters = null,
    object Resources = null,
    string State = null,
    string TimeEnds = null,
    ResourceSchedulerScheduleTimeouts Timeouts = null,
    string TimeStarts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails">RecurrenceDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters">ResourceFilters</a></code> | <code>object</code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources">Resources</a></code> | <code>object</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds">TimeEnds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts">TimeStarts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `RecurrenceDetails`<sup>Required</sup> <a name="RecurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails"></a>

```csharp
public string RecurrenceDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceFilters`<sup>Optional</sup> <a name="ResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters"></a>

```csharp
public object ResourceFilters { get; set; }
```

- *Type:* object

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources"></a>

```csharp
public object Resources { get; set; }
```

- *Type:* object

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `TimeEnds`<sup>Optional</sup> <a name="TimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds"></a>

```csharp
public string TimeEnds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts"></a>

```csharp
public ResourceSchedulerScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `TimeStarts`<sup>Optional</sup> <a name="TimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts"></a>

```csharp
public string TimeStarts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

### ResourceSchedulerScheduleResourceFilters <a name="ResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFilters {
    string Attribute,
    string Condition = null,
    object ShouldIncludeChildCompartments = null,
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments">ShouldIncludeChildCompartments</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value">Value</a></code> | <code>object</code> | value block. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}.

---

##### `ShouldIncludeChildCompartments`<sup>Optional</sup> <a name="ShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments"></a>

```csharp
public object ShouldIncludeChildCompartments { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}

---

### ResourceSchedulerScheduleResourceFiltersValue <a name="ResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFiltersValue {
    string Namespace = null,
    string TagKey = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}.

---

### ResourceSchedulerScheduleResources <a name="ResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResources {
    string Id,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}.

---

### ResourceSchedulerScheduleTimeouts <a name="ResourceSchedulerScheduleTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceSchedulerScheduleResourceFiltersList <a name="ResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get"></a>

```csharp
private ResourceSchedulerScheduleResourceFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleResourceFiltersOutputReference <a name="ResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments">ResetShouldIncludeChildCompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* object

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetShouldIncludeChildCompartments` <a name="ResetShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments"></a>

```csharp
private void ResetShouldIncludeChildCompartments()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value">Value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput">ShouldIncludeChildCompartmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">ShouldIncludeChildCompartments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```csharp
public ResourceSchedulerScheduleResourceFiltersValueList Value { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ShouldIncludeChildCompartmentsInput`<sup>Optional</sup> <a name="ShouldIncludeChildCompartmentsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput"></a>

```csharp
public object ShouldIncludeChildCompartmentsInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ShouldIncludeChildCompartments`<sup>Required</sup> <a name="ShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```csharp
public object ShouldIncludeChildCompartments { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleResourceFiltersValueList <a name="ResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFiltersValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```csharp
private ResourceSchedulerScheduleResourceFiltersValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="ResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourceFiltersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTagKey` <a name="ResetTagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleResourcesList <a name="ResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get"></a>

```csharp
private ResourceSchedulerScheduleResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleResourcesOutputReference <a name="ResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceSchedulerScheduleTimeoutsOutputReference <a name="ResourceSchedulerScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ResourceSchedulerScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



